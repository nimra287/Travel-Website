import React from 'react';
import '../App.css';
import './HeroSection.css';
import {Button} from './Button'
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className='hero-container'>
        {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
              
            <button onClick={() => (navigate("/video"))} className='btns-watch btn--primary btn--large' aria-hidden="true">
            WATCH TRAILER  <i class="fa fa-play-circle" aria-hidden="true"></i></button>


            {/* <Button onclick={() => (navigate('/product'))} className='btns-watch' 
            buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER
             <i class="fa fa-play-circle" aria-hidden="true"></i></Button> */}

        </div>

    </div>
  )
}

export default HeroSection