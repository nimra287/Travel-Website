import React from 'react';
import { Link } from 'react-router-dom';
import './SecondFooter.css';

function SecondFooter() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">About Us</p>
            <p className="footer-subscription-text">Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        </section>

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

export default SecondFooter