import React from "react";
import '../../App.css';
import CardsServices from "../CardsServices";
import SecondFooter from "../SecondFooter";

export default function Services() {
    return (
        <>
        <div className="services-div">
            <h1 className="services-heading">How do online travel work?</h1>
            <p className="services-text">Online travel agencies can be used by the general public for leisure travel, 
                and by organizations for business travel. The platforms differ in what they offer, but the premise remains 
                the same: to facilitate travel and its associated admin and costs. </p>
        </div>
            <CardsServices/>
            <SecondFooter/>
        </>
    )
}