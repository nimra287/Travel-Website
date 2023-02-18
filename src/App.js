import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Video from './components/Video';
import LoginForm from './components/LoginForm';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        
        <Route element={<ProtectedRoutes/>}>
        <Route path='/services' exact element={<Services/>}/>
        <Route path='/products' exact element={<Products/>}/>
        </Route>

        <Route path='/sign-up' exact element={<SignUp/>}/>
        <Route path='/login' exact element={<LoginForm/>}/>
        <Route path='/video' exact element={<Video/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
