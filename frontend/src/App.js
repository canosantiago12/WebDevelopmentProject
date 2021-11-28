import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'; 
import { routes } from './routes';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

import AuthService from './services/auth.service';

import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Landing from './pages/LandingPage';
import Profile from './pages/Profile';
import BoardUser from './pages/UserDashboard';

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
        <Route path='/login' element={<Login currentUser={currentUser}/>} />
        <Route path='/register' element={<Register currentUser={currentUser}/>} />
        <Route path='/' element={<Landing currentUser={currentUser}/>} />
        <Route path='/profile' element={<Profile currentUser={currentUser}/>} />
        <Route path='/user' element={<BoardUser currentUser={currentUser}/>} />

        {/*routes.map((route) => (
          <Route path={route.to} element={route.component} />
        ))*/}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
