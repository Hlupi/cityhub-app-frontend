import React, {PureComponent} from 'react'
import GoogleMapRender from './GoogleMapRender'
import '../carousel.css'
import logo from '../images/cityhub-logo-black.svg'

export default class Event extends PureComponent {
    state = {}

    render() {
        return (
            <div>
                <img src={logo} className='logoStyle' alt=''/>
                <div className='divSlide'>
                    <GoogleMapRender />
                </div>
                <div className='legend'>         
                    <h1>{this.props.data.title}</h1> 
                    <p>{this.props.data.description}</p>
                    <p>address: {this.props.data.address}</p>
                </div>
            </div>
        )
    }
}
