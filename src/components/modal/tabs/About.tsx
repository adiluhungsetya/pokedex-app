import React from 'react';
import DataRow from '../DataRow';
import { usePokemonModal } from '../../../context/ModalProvider';
import { ContextModal } from '../../../types/pokemon-types';
import { getTypeIconSrc } from '../../../utils/helper';

const About : React.FC<{}> = () => {
    const { currentPokemon } = usePokemonModal() as ContextModal;
    
    return (
        <>
            <h4>Pokédex Data</h4>
                
            <table>
                <tbody>
                    <DataRow catergory={ 'height' } value={ currentPokemon.height as string } />
                    <DataRow catergory={ 'weight' } value={ currentPokemon.weight as string } />

                    <tr>
                        <td className='category'>Abilities</td>
                        <td>
                            <ol>
                                {
                                    currentPokemon?.abilities?.map(({ ability, is_hidden }) => {
                                        if(is_hidden) {
                                            return <small key={ ability.name }>{ ability.name } (hidden ability)</small>
                                        }
                                        
                                        return <li key={ ability.name }>{ ability.name}</li>
                                    })
                                }
                            </ol>
                        </td>
                    </tr>

                    <tr>
                        <td className='category'>Types</td>
                        <td>
                            {
                                currentPokemon?.types?.map(({ name }) => {
                                    const typeImage = getTypeIconSrc(name);

                                    return <img key={ name } className={ name } src={ typeImage } alt={ name } />
                                })
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default About;