import React from 'react';
import './App.css';
import {Header} from "./1-header/Header";
import {Home} from "./2-home/Home";
import {Triggers} from "./3-triggers/Triggers";
import {Presentation} from "./4-presentation/Presentation";
import {Features} from './5-features/Features';
import {Statistics} from "./6-statistics/Statistics";
import {Blog} from "./7-blog/Blog";
import {Testimonials} from "./8-testimonials/Testimonials";
import {FAQ} from './9-FAQ/FAQ';
import {Pricing} from "./10-pricing/Pricing";
import {Subscription} from "./11-subscription/Subscription";
import {Footer} from "./12-footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <Home/>
            <Triggers/>
            <Presentation/>
            <Features/>
            <Statistics/>
            <Blog/>
            <Testimonials/>
            <FAQ/>
            <Pricing/>
            <Subscription/>
            <Footer/>
        </>
    );
}

export default App;
