import React from 'react'
import { LandingPage } from './PageStyle'

const Landing = () => {
    return (
        <>
            <LandingPage>
                <div className="overlay"></div>
                <div className="text-container">
                    <h1>Welcome to AnimeList</h1>
                    <h2>Join your friends and share your anime list with them!</h2>
                </div>
            </LandingPage>
        </>
    )
}

export default Landing;
