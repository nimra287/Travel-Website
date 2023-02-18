import React from 'react';
import CardItem from './CardItem';
import './Cards.css'
import './CardsServices.css'

function CardsServices() {
  return (
    <>
    <div className='cards'>
        <h1 className='text-heading'>Services We Offer</h1>
        <p className='text-service'>Tourism services refer to various services provided to travelers for 
        their convenience and enjoyment during their trip.</p>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        src="images/img-service1.jfif"
                        text="Hotels, resorts, hostels, bed and breakfasts, and vacation rentals"
                        label='Accommodation'
                        path='/services'
                    />
                    <CardItem 
                        src="images/img-service2.jfif"
                        text="Transportation services include rental cars, buses, trains, and flights"
                        label='Transportation'
                        path='/services'
                    />
                     <CardItem 
                        src="images/img-service3.jfif"
                        text="Restaurants and cafes offering a variety of cuisine and drink options"
                        label='Food & Beverges'
                        path='/services'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                        src="images/img-service4.jfif"
                        text="Entertainment options, such as theater and music are available to travelers"
                        label='Entertainment'
                        path='/services'
                    />
                    <CardItem 
                        src="images/img-service5.jfif"
                        text="Shopping is a popular activity for travelers, and many services offer packages"
                        label='Shopping'
                        path='/services'
                    />
                     <CardItem 
                        src="images/img-service6.jfif"
                        text="Local tours are a great way for travelers to explore the local culture and customs"
                        label='Local Tour'
                        path='/services'
                    />
                      <CardItem 
                        src="images/img-service7.jfif"
                        text="Cultural experiences, such as museum visits, historical tours, and cultural festivals"
                        label='Cultural Experiences'
                        path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>



    <div className='cards'>
        <h1 className='heading-facility'>Our Facilities</h1>
        <p className='text-facility'>Tourism facilities refer to various types of establishments and services 
        that cater to the needs of tourists.</p>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        src="images/img-facilities1.jpg"
                        text="A camping ground is a area for camping, usually with designated campsites"
                        label='Camping Grounds'
                        path='/services'
                    />
                     <CardItem 
                        src="images/img-facilities3.jpg"
                        text="Ski slopes are areas specifically designed for skiing and snowboarding"
                        label='Ski Slopes'
                        path='/services'
                    />
                    <CardItem 
                        src="images/img-facilities2.jpg"
                        text="Hiking trails are paths or tracks specifically designated for hiking"
                        label='Hiking Trails'
                        path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>

    </>
  )
}

export default CardsServices