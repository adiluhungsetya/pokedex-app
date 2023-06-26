import React from 'react';
import IntroModal from './IntroModal';
import * as Dialog from '@radix-ui/react-dialog';
import { usePokemonModal } from '../../context/ModalProvider';
import { ContextModal } from '../../types/pokemon-types';
import TabsContainer from './TabsContainer';

const Modal : React.FC<{}> = () => {
    const { isModalOpen, closeModal, currentPokemon } = usePokemonModal() as ContextModal;

    return (
        <Dialog.Root
            open={ isModalOpen }
            onOpenChange={ (isOpen) => ! isOpen && closeModal() }
        >

        <Dialog.Portal>
          <Dialog.Overlay className='overlay' />
            
          <Dialog.Content
            className={ `modal ${ currentPokemon?.types ? currentPokemon?.types[0]?.name : "" }` }
            data-content={ currentPokemon?.name }
          >
            <IntroModal />
              
            <TabsContainer />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
};

export default Modal;