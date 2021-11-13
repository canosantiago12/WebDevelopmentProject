import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  useEffect(() => {
    function handleErrors(response) {
      if (!response.ok) {
          throw Error(response.statusText);
      }
      return response;
    }

    fetch("http://localhost:3001")
      .then(handleErrors)
      .then(response => console.log("ok"))
      .catch(error => console.log(error));
      
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
