import  React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'
import Instagram from './instagram/Instagram'
import Event from './events/Event'
import Events from './events/Events'
import Joke from './events/Joke'
import { connect } from 'react-redux';
import { fetchSliderData } from '../actions/sliderData'



class TestCarousel extends Component {

    param = this.props.match.params.location

    componentDidMount() {
        this.props.fetchSliderData(this.param)
    }
   
    render() {
        return (
            <div>
            <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} showIndicators={false} showStatus={false}>
                {this.props.slider.map(item => {
                    if (item.source === "instagram") {
                        return (
                            <div key={item}><Instagram data={item} /></div>
                        )
                    }

                    if (item.source === "eventsList") {
                        return (
                            <div key={item}><Events data={item}/></div>
                        )
                    }

                    if (item.source === "joke") {
                        return (
                            <div key={item}><Joke data={item} /></div>
                        )
                    }
                    
                    if (item.source === "event") {
                        return (
                            <div key={item}><Event data={item}/></div>
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