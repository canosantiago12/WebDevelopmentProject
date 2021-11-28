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
    background: url(${ imgLanding }) no-repeat center;
    animation: ${ backgroundMovingAnimation } 30s ease infinite;
    position: relative;
`

export const LoginPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90vh;
    position: relative;
    background: url(${ imgLanding }) no-repeat center;
    animation: ${ backgroundMovingAnimation } 30s ease infinite;
`

export const RegisterPage = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 90vh;
    position: relative;
    background: url(${ imgLanding }) no-repeat center;
    animation: ${ backgroundMovingAnimation } 30s ease infinite;
`

export const ProfilePage = styled.div`
    width: 100%;
    height: 90vh;
`