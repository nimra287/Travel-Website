import React from "react";
import '../../App.css';
import ProdcutBlog from "../ProdcutBlog";
import SecondFooter from "../SecondFooter";

export default function Products() {
    return (
        <>
        <div className="products-div">
            <h1 className="products-heading">Travel and Tourism</h1>
            <p className="products-text">Travel and tourism is the largest service industry in Pakistan.
             It provides heritage, cultural, medical, business and sports tourism.</p>
        </div>
        <ProdcutBlog/>
        <SecondFooter/>
        </>
    )
}