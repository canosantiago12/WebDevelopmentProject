import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'; 
import { routes } from './routes';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

import AuthService from './services/auth.service';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <Router>
      <NavBar currentUser={currentUser}/>
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
