import * as React from 'react';
import { Pokemon, ContextModal } from '../types/pokemon-types';

export const ModalContext = React.createContext<ContextModal | null>(null);

export const usePokemonModal = () => {
    return React.useContext(ModalContext);
};

interface ModalProviderProps {
    children: React.ReactNode
}

export const ModalProvider : React.FC<ModalProviderProps> = ({ children }) => {
    const [modal, setModal] = React.useState<{isOpen: boolean, pokemon: Partial<Pokemon>}>({ isOpen: false, pokemon:{} });

    const value : ContextModal = {
        currentPokemon: {...modal.pokemon},
        openModal: (pokemon : Pokemon) => setModal({ isOpen: true, pokemon }),
        isModalOpen: modal.isOpen,
        closeModal: () => setModal((prev => ({ ...prev, isOpen: false }))),
    };

    return (
        <ModalContext.Provider value={ value }>
            { children }
        </ModalContext.Provider>
    );
};
