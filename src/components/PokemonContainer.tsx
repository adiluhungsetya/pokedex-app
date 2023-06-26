/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import usePokemons from '../hooks/usePokemons';
import Card from './Card';
import { maxData } from '../constant/common';
import { Pokemon } from '../types/pokemon-types';

interface PokemonContainerProps {
    type: string,
    limit: number,
    toggleLoad: React.Dispatch<React.SetStateAction<boolean>>,
    prevData: Pokemon[],
    toggleSaveData: React.Dispatch<React.SetStateAction<Pokemon[]>>,
}

const PokemonContainer : React.FC<PokemonContainerProps> = ({ type, limit, toggleLoad, prevData, toggleSaveData }) => {
    const pokemons = usePokemons(type, limit, prevData);
    
    React.useEffect(() => {
        if(pokemons && pokemons.length === maxData){
            toggleLoad(false)
        }
        if(pokemons && pokemons.length > prevData.length){
            toggleSaveData(pokemons)
        }
    }, [pokemons])

    return (
        <div className='pokemons-container'>
            { pokemons?.map((pokemon) => <Card key={ pokemon.paddedId } pokemon={ pokemon } />) }
        </div>
    );
};

export default PokemonContainer;