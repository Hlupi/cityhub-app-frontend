import  React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'
import Instagram from './instagram/Instagram'
import Event from './events/Event'
import Text from './events/Text'
import { connect } from 'react-redux';
import { fetchSliderData } from '../actions/sliderData'



class TestCarousel extends Component {

    componentDidMount() {
        this.props.fetchSliderData()
    }

    slides = () => {
        return (
            <div>
            
            </div>
        )
    }
    
    render() {
        return (
            <div>
            <Carousel autoPlay interval={5000} infiniteLoop showThumbs={false} showIndicators={false} showStatus={false}>
                {this.props.slider.hashtags.map(item => {
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
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        slider: state.sliderData
    }
}

export default connect(mapStateToProps, { fetchSliderData })(TestCarousel)