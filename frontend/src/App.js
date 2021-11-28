import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'; 
import { routes } from './routes';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {routes.map((route) => (
          <Route path={route.to} element={route.component} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
