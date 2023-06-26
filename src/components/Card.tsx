import React from 'react';
import { Pokemon, ContextModal } from '../types/pokemon-types';
import { usePokemonModal } from '../context/ModalProvider';
import { getTypeIconSrc } from '../utils/helper';

interface CardProps {
    pokemon : Pokemon
}

const Card : React.FC<CardProps> = ({ pokemon, pokemon: { paddedId, name, types, imgSrc }}) => {
    const { openModal } = usePokemonModal() as ContextModal;

    return (
        <div
            onClick={ () => openModal(pokemon) }
            className={ `pokemon-card ${ types[0].name }` }
        >
            <div>
                <span className='id-number'>{ '#' + paddedId }</span>
                <span className='pokemon-name'>{ name }</span>

                <div className='types'>
                    {
                        types.map(({ name }) => {
                            const typeImg = getTypeIconSrc(name);
                            
                            return (
                                <div key={ name } className={ name }>
                                    <img src={ typeImg } alt={ name } />
                                    <span className='type-name'>{ name }</span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className='pokeball-bg'></div>
            <img className='pokemon-image' src={ imgSrc } alt={name} />
        </div>
    );
};

export default Card;