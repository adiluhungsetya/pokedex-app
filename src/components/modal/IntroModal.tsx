/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { usePokemonModal } from '../../context/ModalProvider';
import { getTypeIconSrc } from '../../utils/helper';
import { ContextModal } from '../../types/pokemon-types';

const IntroModal : React.FC<{}> = () => {
    const { currentPokemon, closeModal } = usePokemonModal() as ContextModal;

    return (
        <div className='pokemon-intro'>
            <a
                className='arrow-back'
                onClick={ closeModal }
            ></a>

            <div className='current-pokemon'>
                <img src={ currentPokemon.imgSrc } alt='Pokemon-Image' />

                <div>
                    <span className='id-number'>#{ currentPokemon.id }</span>
                    <span className='pokemon-name'>{ currentPokemon.name }</span>

                    <div className='types'>
                        {
                            currentPokemon?.types?.map(({ name }) => {
                                const typeImg = getTypeIconSrc(name)

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
            </div>
        </div>
    );
};

export default IntroModal;
