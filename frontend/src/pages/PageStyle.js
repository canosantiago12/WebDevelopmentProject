import styled, { keyframes } from "styled-components";
import imgLanding from '../assets/images/animeCollage.jpg';

const backgroundMovingAnimation = keyframes`
    0% { background-position: 0px 0px; }
    25% { background-position: -400px 0px; }
    50% { background-position: -400px -200px; }
    75% { background-position: 0px -200px; }
    100% { background-position: 0px 0px; }
`

export const LandingPage = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 90vh;
    position: relative;
    background: url(${ imgLanding }) no-repeat center;
    animation: ${ backgroundMovingAnimation } 30s ease infinite;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 10;
    }
`

export const LoginPage = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 90vh;
    position: relative;
    background: url(${ imgLanding }) no-repeat center;
    animation: ${ backgroundMovingAnimation } 30s ease infinite;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 10;
    }
`

export const RegisterPage = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 90vh;
    position: relative;
    background: url(${ imgLanding }) no-repeat center;
    animation: ${ backgroundMovingAnimation } 30s ease infinite;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 10;
    }
`