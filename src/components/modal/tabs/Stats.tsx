import React from 'react';
import DataRow from '../DataRow';
import { usePokemonModal } from '../../../context/ModalProvider';
import { formatStats } from '../../../utils/helper';
import { ContextModal, Stat } from '../../../types/pokemon-types';

const Stats : React.FC<{}> = () => {
    const { currentPokemon } = usePokemonModal() as ContextModal;
    const stats = formatStats(currentPokemon.stats as Stat[]);
    
    return (
        <>
            <h4>Base Stats</h4>

            <table>
                <tbody>
                    {
                        stats.map(stat => {
                            const { name, value, max } = stat;

                            return <DataRow key={ name } catergory={ name } value={ value.toString() } max={ max } />
                        })
                    }
                </tbody>
            </table>
        </>
    );
};

export default Stats;