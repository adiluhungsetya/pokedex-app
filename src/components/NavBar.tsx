/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import useTypes from '../hooks/useTypes';
import { getTypeIconSrc } from '../utils/helper';
import { Base } from '../types/pokemon-types';

interface NavBarProps {
    toggleType : React.Dispatch<React.SetStateAction<string>>
}

const NavBar : React.FC<NavBarProps> = ({ toggleType }) => {
    const types = useTypes();

    return (
        <nav className='types-bar'>
            {
                types?.map(({ name }: Base, index) => {
                    const typeImg = getTypeIconSrc(name);
                    return (    
                        <a
                            key={ index }
                            className={ name }
                            onClick={ () => toggleType(name) }
                        >
                            <img src={ typeImg } alt={ name } />
                        </a>
                    );
                })
            }
        </nav>
    );
};

export default NavBar;