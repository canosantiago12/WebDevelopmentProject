import React, { useState } from 'react'
import { Nav, NavLink, Bars, NavBtn, NavBtnLink } from './NavbarElements';

const NavBar = () => {
    const [loggeado, setLoggeado] = useState(false);
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                {loggeado ?
                <NavBtn>
                    <NavBtnLink onClick={() => setLoggeado(false)} to="/">Logout</NavBtnLink>
                </NavBtn>
                :
                <NavBtn>
                    <NavBtnLink onClick={() => setLoggeado(true)} to="/login">Login</NavBtnLink>
                </NavBtn>
                }
            </Nav>
        </>
    )
}

export default NavBar
