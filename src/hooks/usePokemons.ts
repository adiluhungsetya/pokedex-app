import { formatPokemonData } from './../utils/helper';
import { apiFetch } from "../utils/api-fetch";
import { useQuery } from 'react-query';
import { BasePokemon, Pokemon, PokemonResponse, DefaultResponse, Base } from '../types/pokemon-types';

const usePokemons = (type : string, limit: number ) => {
    const { data } = useQuery({
        queryKey: ['pokemons', {type, limit}],
        queryFn: async () => {

            if(type === "all"){
                const { results: pokemonList } : DefaultResponse = await apiFetch(`/pokemon?offset=0&limit=${limit}`);

                const pokemons = await Promise.all<Pokemon>(
                    pokemonList.map(async (pokemon : Base) => {
                        const res = await fetch(pokemon.url);
                        const data : PokemonResponse = await res.json();
    
                        return formatPokemonData(data);
                    })
                );

                return pokemons;
            }

            const { pokemon: pokemonList } : {pokemon : BasePokemon[]} = await apiFetch(`/type/${ type }`);
            
            const pokemons = await Promise.all<Pokemon>(
                pokemonList.map(async ({ pokemon } : BasePokemon) => {
                    const res = await fetch(pokemon.url);
                    const data : PokemonResponse = await res.json();

                    return formatPokemonData(data);
                })
            );

            return pokemons;
        }
    });

    return data;
};

export default usePokemons;