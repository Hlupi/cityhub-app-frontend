import React, {PureComponent} from 'react'
import GoogleMapRender from './GoogleMapRender'
import '../carousel.css'
import logo from '../images/cityhub-logo-black.svg'

export default class Events extends PureComponent {
    state = {}
    
    render() {
        console.log(this.props.data.eventsToday)
        return (
            <div>
                <img src={logo} className='logoStyle' alt=''/>
                <div className='divSlide'>
                    <GoogleMapRender data={this.props.data.eventsToday}/>
                </div>
                <div className='legend'>  
                     {this.props.data.eventsToday.map(item => (<div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p><br /><hr />
                    </div>))} 
                     
                    {/* <h1>{this.props.data.title}</h1> 
                    <p>{this.props.data.description}</p>
                    <p><i>{this.props.data.address}</i></p> */}
                </div>
            </div>
        )
    }
}
