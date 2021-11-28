import React from 'react'
import { LandingPage } from './PageStyle'

const Landing = () => {
    return (
        <>
            <LandingPage>
                <div className="overlay"></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="landingText">
                                <h1 className="display-1">Welcome to <br/>AnimeList</h1>
                                <h2 className="text-break text-justify">Join your friends and share your <br/>anime list with them!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </LandingPage>
        </>
    )
}

export default Landing;
