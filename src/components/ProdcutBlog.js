import React from 'react';
import './ProductBlog.css'

function CardsServices() {
  return (
    <>
    <div className='product-main'>
        <div className='product-img'>
            <img src='images/img-home1.jpg' alt="Travel Image"/>
        </div>
        <div className='product-text'>
            <h1>The Exotic Land of History and Mystery</h1>
            <p>Pakistan tourism package options are extensive since the country is big and full 
            of monuments and things to do.Visiting the leading Pakistan tourism attractions will 
            delight those who enjoy ancient archaeological sites, history, stunning nature, and friendly smiles.
            <br></br> <br></br>
            Your Pakistan holidays will be unforgettable because of the country’s unique architecture, exotic 
            destinations, and generous people. Spend some days marveling at the fascinating ancient civilizations, 
            grand temples and great tombs of Pakistan iconic cities .</p>

            <button className='btn-contact'>Contact Us</button>
        </div>
    </div>


    <div className='product-card'>
        <div className='sub-card'>
            <i class="fa fa-calendar" aria-hidden="true"></i>
            <h4>Pakistan Short Stay</h4>
            <p>Explore Pakistan most impressive sights with our hand-crafted short stays tour packages 
               that include airport transfers, accommodation and guided sightseeing.</p>
            <button className='btn-contact-us'>Contact Us</button>
        </div>
        <div className='sub-card'>
            <i class="fa fa-plane" aria-hidden="true"></i>
            <h4>Pakistan Spiritual Tour</h4>
            <p>These tours specially tailored to give you the opportunity to enrich your spiritual 
                experience visiting the places of the old and new testament of Islamic heritage.</p>
            <button className='btn-contact-us'>Contact Us</button>
        </div>
        <div className='sub-card'>
            <i class="fa fa-camera" aria-hidden="true"></i>
            <h4>Pakistan Shore Excursions</h4>
            <p>While you are on your Sea cruise stopping at any Egyptian Port for a few hours or 
                overnight, We'll be glad to offer you a variety of our Shore Excursions.</p>
            <button className='btn-contact-us'>Contact Us</button>
        </div>
    </div>
    </>
  )
}

export default CardsServices