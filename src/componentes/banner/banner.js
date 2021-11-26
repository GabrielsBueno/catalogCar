import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Image } from 'semantic-ui-react';

export default class Banner extends Component {
    render() {
        return (
            <Carousel autoPlay infiniteLoop className='carouselContainer'>
                <div className='imageCarouselContainer'>
                    <Image src="https://media.adtorqueedge.com/new-cars/bmw-nz/m8-coupe/banner.jpg" />
                    
                </div>
                <div>
                    <Image src='https://media.adtorqueedge.com/new-cars/bmw-nz/m8-gran-coupe/banner.jpg' />
                   
                </div>
                <div>
                    <Image src="https://media.adtorqueedge.com/new-cars/bmw-nz/x2/banner.jpg" />
                    
                </div>
            </Carousel>
        );
    }
}

