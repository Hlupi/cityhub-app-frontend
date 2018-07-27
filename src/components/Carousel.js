import  React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'
import Instagram from './instagram/Instagram'
import Event from './events/Event'
import Text from './events/Text'

const dummyInsta = [
    {
        source: 'instagram',
        name: 'instagram name 1',
        text: "I still can't get over how sick this room was. Definitely recommend @cityhub for short breaks \n#cityhubamsterdam #amsterdam #bed #led #rainbow",
        display_url: "https://scontent-ams3-1.cdninstagram.com/vp/b5d4df758ee43010578a3239c36d36ed/5BF4A21D/t51.2885-15/e35/37182273_2145646225715803_5241687918942093312_n.jpg?_nc_eui2=AeF6nv1rFCfYZig9Iz67Fs4nU4Z0ZMsi3BV__KMJmz1FsFP3WtwAY8y2YGpdBFxmDyMFG4T-Sp_4BooLIokqIuPr&se=7"
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

export default class TestCarousel extends Component {

    slides = () => {
        return (
            <div>
            
            </div>
        )
    }
    
    render() {
        return (
            <Carousel autoPlay interval={10000} infiniteLoop showThumbs={false} showIndicators={false} showStatus={false}>
                {dummyInsta.map(item => {
                    if (item.source === "instagram") {
                        return (
                            <li ><Instagram data={item}/></li>
                        )
                    }
                    if (item.source === "event" && item.display_url === null) {
                        return (
                            <li className='divSlide'><Text name={item.name} /></li>
                        )
                    }
                    if (item.source === "event") {
                        return (
                            <li><Event name={item.name}/></li>
                        )
                    }
                
            })}
            </Carousel>
        )
    }
}