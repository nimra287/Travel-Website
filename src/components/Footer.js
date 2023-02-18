import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Footer.css';

function Footer() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [style, setStyle] = useState({
        color : 'red'
    });

    
    const changeHandler = (e) => {
        e.preventDefault();
         if(email.includes('@')){
            setMessage("Subscription Successful");
            setStyle({color:'green'});
        } 
        else{
            setMessage("Please enter valid email");
        }
    }

  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">Join the Adventure newsletter to receive our best vacation deals</p>
            <p className="footer-subscription-text">You can unsubscribe at any time.</p>
            <div className="input-areas">

                <form>
                    <input type="email" name='email' value={email} placeholder='Your Email' 
                    onChange={(e) => setEmail(e.target.value)} className="footer-input"  />
                    <button className='btn-outline' onClick={changeHandler}>Subscribe</button>
                    <p className='footer-msg' style={style}>{message}</p>
                </form>

            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About</h2>
                    <Link to='/sign-up'>How it Works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contact</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Videos</h2>
                    <Link to='/'>Submit Video</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Social</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className='social-logo'>
                        TRAVEL <i class="fa fa-ravelry" aria-hidden="true"></i>
                    </Link>
                </div>
                <small className="website-rights">TRAVEL <i class="fa fa-copyright" aria-hidden="true"></i> 2023</small>
                <div className="social-icons">
                    <Link className="social-icon-link facebook" to='https://web.facebook.com/?_rdc=1&_rdr' target='_blank' aria-label='Facebook'>
                    <i class="fa fa-facebook" aria-hidden="true"></i></Link>

                    <Link className="social-icon-link instagram" to='https://www.instagram.com/' target='_blank' aria-label='Instagram'>
                    <i class="fa fa-instagram" aria-hidden="true"></i></Link>

                    <Link className="social-icon-link youtube" to='https://www.youtube.com/' target='_blank' aria-label='Youtube'>
                    <i class="fa fa-youtube-play" aria-hidden="true"></i></Link>

                    <Link className="social-icon-link twitter" to='https://twitter.com/?lang=en' target='_blank' aria-label='Twitter'>
                    <i class="fa fa-twitter" aria-hidden="true"></i></Link>

                    <Link className="social-icon-link linkedin" to='https://www.linkedin.com/home' target='_blank' aria-label='LinkedIn'>
                    <i class="fa fa-linkedin" aria-hidden="true"></i></Link>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Footer