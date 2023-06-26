/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import usePokemons from '../hooks/usePokemons';
import Card from './Card';
import { maxData } from '../constant/common';

interface PokemonContainerProps {
    type: string,
    limit: number,
    toggleLoad: React.Dispatch<React.SetStateAction<boolean>>,
}

const PokemonContainer : React.FC<PokemonContainerProps> = ({ type, limit, toggleLoad }) => {
    const pokemons = usePokemons(type, limit);
    
    React.useEffect(() => {
        if(pokemons && pokemons.length === maxData){
            toggleLoad(false)
        }
    }, [pokemons])

    return (
        <div className='pokemons-container'>
            { pokemons?.map((pokemon) => <Card key={ pokemon.paddedId } pokemon={ pokemon } />) }
        </div>
    );
};

export default PokemonContainer;