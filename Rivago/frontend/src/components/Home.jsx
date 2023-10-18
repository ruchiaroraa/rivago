import React from "react";
import Navbar from './Navbar';
import Carousel from './Carousel';
import Services from './Services';
import Aboutus from './Aboutus';
import Destination from './Destination';
import Contactus from './Contactus';

const Home = () => {
    return(
        <>
         
            <Carousel/>
            <Aboutus/>
        </>
    )
}

export default Home;