
import  React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'
import Instagram from './instagram/Instagram'
import Event from './events/Event'

const dummyInsta = [
    {
        source: 'instagram',
        name: 'instagram name 1'
    },
    {
        source: 'instagram',
        name: 'instagram name 2'
    },
    {
        source: 'instagram',
        name: 'instagram name 3'
    },
    {
        source: 'instagram',
        name: 'instagram name 4'
    },
    {
        source: 'instagram',
        name: 'instagram name 5'
    },
    {
        source: 'instagram',
        name: 'instagram name 6'
    },
    {
        source: 'instagram',
        name: 'instagram name 7'
    },
    {
        source: 'instagram',
        name: 'instagram name 8'
    },
    {
        source: 'event',
        name: 'event name 1'
    },
    {
        source: 'event',
        name: 'event name 2'
    }
]

const dummyEvent = [
    {
        source: 'event',
        name: 'event name 1'
    },
    {
        source: 'event',
        name: 'event name 2'
    }
]

export default class TestCarousel extends Component {

    slides = () => {
        return (
            <div>
            
            </div>
        )
    }
    
    render() {
        return (
            <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false}>
                {dummyInsta.map(item => {
                    if (item.source === "instagram") {
                        return (
                            <li className='divSlide' ><Instagram name={item.name}/></li>
                        )
                    }
                    if (item.source === "event") {
                        return (
                            <li className='divSlide' ><Event name={item.name}/></li>
                        )
                    }
                
            })}
            </Carousel>
        )
    }
}