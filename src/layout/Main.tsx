
import React, { useState, Suspense } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import './layout.scss'

const Main = () => {

    return (
        <div className="main">
            <Navbar/>
            <div className="mainContent">
                <h1>You are in Main, start building here!</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Main