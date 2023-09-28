import Navigation from './Navigation.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import React from 'react'; 

export default function Main(props) {

    return (
        <div>
            <Navigation/>
            <Home/>
            <Footer/>
        </div>
    )
}