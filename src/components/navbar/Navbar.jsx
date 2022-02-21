import React from 'react';
import Logo from './Logo';

const Navbar = (props) => {
    return(
        <header className='navbar'>
            <div className='navbar__container'>
                <Logo text="AV"></Logo>
            </div>
        </header>
    );
}

export default Navbar;