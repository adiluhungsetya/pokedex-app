import { BASE_IMG_URL } from './../constant/common';
import { statsMaxValues } from '../constant/common';
import { PokemonResponse, Pokemon, Stat, EvolutionChain, Evolution, StatFilter } from '../types/pokemon-types';

export const getTypeIconSrc = (type: string) => `/images/types-icons/${ type }.svg`;

export const formatPokemonData = (pokemon : PokemonResponse) : Pokemon => {
    const { id, name, sprites, weight, height, types } = pokemon;
    
    const weightInKg = (weight / 10 ) + 'kg';
    const heightInMeter = (height / 10 ) + 'm';
    const paddedId = String(id).padStart(3, '0');
    const formattedTypes = types.map(({ type }) => type);
    const pokemonImg = sprites.other.dream_world.front_default || sprites.other['official-artwork'].front_default;

    return {
        ...pokemon,
        paddedId: paddedId,
        weight: weightInKg,
        imgSrc: pokemonImg as string,
        height: heightInMeter,
        types: formattedTypes,
        name: removeHyphens(name),
    };
}

export function formatStats(stats : Stat[]) : StatFilter[] {

    const statsObject : StatFilter[] = stats.map(({ stat, base_stat }) => {
        return {
            name: removeHyphens(stat.name),
            value: base_stat,
            max: statsMaxValues[stat.name]
        }
    });

    const total = stats.reduce((total, { base_stat }) => total + base_stat, 0);
    
    return [
        ...statsObject,
        { name: 'total', value: total}
    ];
}

export function normalizeEvolutionChain(evolutionChain : EvolutionChain) : Evolution[] {
    const { species, evolves_to } = evolutionChain;
    
    if(! evolves_to.length) {
        return [];
    }
    
    const evolutions : Evolution[] = evolves_to.reduce((chain : Evolution[], evolution : EvolutionChain) => {
        return [
            ...chain,
            {
                current: {
                    name: species.name,
                    url: getPokemonImage(species.url),
                },
                next: {
                    name: evolution.species.name,
                    url: getPokemonImage(evolution.species.url),
                },
            },
            ...normalizeEvolutionChain(evolution)
        ];
    }, []);

    return evolutions;
}

const getPokemonImage = (url : String) => {
    const filterUrl = url.match(/\/(\d+)\//);
    if(filterUrl){
        const id = filterUrl[1]
        const isPokemonHasSvg = +id < 650; 
        
        if(isPokemonHasSvg) {
            return `${ BASE_IMG_URL }/dream-world/${ id }.svg`;
        }
        
        return `${ BASE_IMG_URL }/official-artwork/${ id }.png`;
    }

    return ""
};

const removeHyphens = (value : string) => {
    return value.replace(/-/g, ' ');
}