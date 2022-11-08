import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Product from "./Producto/Product";
import './Layout.css'

export default function Layout () { 
    return (
        <div>
            <div className="container">
            <Header/>
            <div className="wrapper">
            <Hero/>
            <Product/>
            </div>
            </div>
        </div>
    )
}