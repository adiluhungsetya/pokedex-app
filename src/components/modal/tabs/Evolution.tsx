import React from 'react';
import useEvolution from '../../../hooks/useEvolution';
import { usePokemonModal } from '../../../context/ModalProvider';
import { ContextModal } from '../../../types/pokemon-types';

const Evolution : React.FC<{}> = () => {
    const { currentPokemon } = usePokemonModal() as ContextModal;
    const chain = useEvolution(currentPokemon.id as number);
    
    return (
        <>
            {
                ! chain?.length ?
                    <strong className='error-msg'>This Pokémon doesn't Evolve</strong>
                :
                chain.map((evolution) => {
                    const { current, next } = evolution;

                    return (
                        <div className='evolution-container' key={ next.name }>
                            <div>
                                <div className='poke-img'>
                                    <div className='pokeball-bg'></div>

                                    <img src={ current.url } alt='pokemon-evolution' />
                                </div>

                                <span>{ current.name }</span>
                            </div>

                            <span className='arrow'></span>

                            <div>
                                <div className='poke-img'>
                                    <div className='pokeball-bg'></div>

                                    <img src={ next.url } alt='pokemon-evolution' />
                                </div>

                                <span>{ next.name }</span>
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
};

export default Evolution;
