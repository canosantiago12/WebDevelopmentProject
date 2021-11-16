import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './components/MainLayout'
import Home from './components/Home';
import { routes } from './routes';
import './App.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {routes.map((route) => (
            <Route path={route.to} element={route.component} />
          ))}

          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
