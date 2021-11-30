import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'; 
import NavBar from './components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Landing from './pages/LandingPage';
import Profile from './pages/Profile';
import AddAnime from './pages/AddAnime';
import AddFriend from './pages/AddFriend';
import AuthService from './services/auth.service';
import AnimeDetails from './pages/AnimeDetails';
import FriendDetails from './pages/FriendDetails';

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
        <Route path='/addAnime' element={<AddAnime currentUser={currentUser}/>} />
        <Route path='/addFriend' element={<AddFriend currentUser={currentUser}/>} />
        <Route path='/animeDetails' element={<AnimeDetails />} />
        <Route path='/friendDetails' element={<FriendDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
