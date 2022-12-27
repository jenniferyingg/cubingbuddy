import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <h1>cubing buddy</h1>
                    </NavLogo>
                </NavbarContainer>

            </Nav>

        </>
    );
};

export default Navbar;