
import  React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'

export default class TestCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay interval={2000} infiniteLoop>
                <div>
                    <img src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&h=350" />
                </div>
                <div>
                    <img src="http://dreamatico.com/data_images/people/people-2.jpg" width='60%'/>
                </div>
                <div>
                    <img src="http://itsaboutpeople.co.za/wp-content/uploads/2017/02/business-people-1.jpg" width='60%'/>
                </div>
            </Carousel>
        )
    }
}