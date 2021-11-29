import React from 'react';
import axios from 'axios';
import { AddPage } from './PageStyle';
import { FaSearch } from "react-icons/fa";

const AddAnime = ({ currentUser }) => {
    return (
        <>
            <AddPage>
                <div className="main-content pt-5">
                    <div className="container-fluid px-0 px-sm-3">
                        <div className="row">
                            <div className="col-md-4 mx-auto my-0">
                                <div className="search">
                                    <input type="text" className="form-control rounded-pill" placeholder="Search anime..."/> 
                                    <button className="btn btn-primary rounded-pill">Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 m-auto pt-4">
                                <div className="searchResults">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AddPage>
        </>
    )
}

export default AddAnime;
