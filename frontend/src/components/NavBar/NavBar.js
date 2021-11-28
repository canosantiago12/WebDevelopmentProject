import React from 'react'
import { Nav, NavLink, NavBtn, NavBtnLink, NavBtnGrp } from './NavbarElements';
import AuthService from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';


const NavBar = ({currentUser}) => {
    const history = useNavigate();
    const logOut = () => {
        AuthService.logout();
        history("/");
        window.location.reload();
    };
    
    return (
        <>
            <Nav>
                {currentUser ?
                    <NavLink to="/profile">
                        <img src={Logo} alt='logo'/>
                    </NavLink>
                :
                    <NavLink to="/">
                        <img src={Logo} alt='logo'/>
                    </NavLink>
                }
                <NavBtnGrp>
                    {currentUser ?
                        <NavBtn>
                            <NavBtnLink to="/" onClick={logOut}>Logout</NavBtnLink>
                        </NavBtn>
                        :
                        <>
                            <NavBtn>
                                <NavBtnLink to="/login">Log In</NavBtnLink>
                            </NavBtn>
                            <NavBtn>
                                <NavBtnLink to="/register">Create new account</NavBtnLink>
                            </NavBtn>
                        </>
                    }
                </NavBtnGrp>
            </Nav>
        </>
    )
}

export default NavBar
