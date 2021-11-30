import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #191A1A;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1500px) / 2);
`

export const NavLink = styled(Link)`
    color: #FFFFFF;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:active {
        color: #15cdfc;
    }
`

export const NavBtnGrp = styled.div`
    display: flex;
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 320px) {
        flex-direction: column;
        justify-content: center;
        font-size: 2vh;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #D94D31;
    padding: 10px 22px;
    color: #FFFFFF;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    box-shadow: 2px 2px #2F3232;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #A9412C;
        color: #FFFFFF;
    }
`