import React from 'react';

import Hero from '../components/Hero';

import Footer from '../components/Footer';

function HomePage(props){
    return(
        <div className="home-page" id="home">
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            {/*<Carousel />*/}
            <div className="foot">
                <Footer/>
            </div>
        </div>
    );
}

export default HomePage;