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
   
    render() {
        const newData = this.props.slider.map(item => item.date)
        const justDate = newData.slice(11, 13)
        console.log(this.props.slider)
    
        console.log(justDate)
        
        return (
            <div>
            <Carousel autoPlay interval={10000} infiniteLoop showThumbs={false} showIndicators={false} showStatus={false}>
                {this.props.slider.map(item => {
                    if (item.source === "instagram" && justDate !== null) {
                        return (
                        <img src='https://www.telegraph.co.uk/content/dam/news/2016/09/08/107667228_beech-tree-NEWS_trans_NvBQzQNjv4BqplGOf-dgG3z4gg9owgQTXEmhb5tXCQRHAvHRWfzHzHk.jpg?imwidth=450' />
                        )
                    } else if (item.source === "instagram") {
                        return (
                            <li ><Instagram data={item}/></li>
                        )
                    }
                    
                    // if (item.source === "instagram" && justDate !== null) {
                    //     return (
                    //     <img src='https://www.telegraph.co.uk/content/dam/news/2016/09/08/107667228_beech-tree-NEWS_trans_NvBQzQNjv4BqplGOf-dgG3z4gg9owgQTXEmhb5tXCQRHAvHRWfzHzHk.jpg?imwidth=450' />
                    //     )
                    // }

                    if (item.source === "event" && item.address === null) {
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