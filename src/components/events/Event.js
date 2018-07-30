import React, {PureComponent} from 'react'
import GoogleMapRender from './GoogleMapRender'
import '../carousel.css'

export default class Event extends PureComponent {
    state = {}

    render() {
        return (
            <div>
            <div className='divSlide'>
            <GoogleMapRender />
            {/* <img src="http://itsaboutpeople.co.za/wp-content/uploads/2017/02/business-people-1.jpg" width='70%'/> */}
            </div>

            <div className='legend'>         
                <h1>{this.props.name}</h1> 
            </div>
            </div>
        )
    }
}
