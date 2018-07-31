import React, {PureComponent} from 'react'
import '../carousel.css'
import logo from '../images/cityhub-logo-black.svg'

export default class Text extends PureComponent {
    state = {}
    render() {
        return ( 
            <div>  
                <img src={logo} className='logoStyle' alt=''/>         
                <div className='divSlide'>
                    {/* <img src="http://itsaboutpeople.co.za/wp-content/uploads/2017/02/business-people-1.jpg" width='60%'/> */}
                    <div className='speech-bubble'>
                        <h1>{this.props.data.name}</h1>
                        <p>{this.props.data.text}</p>   
                    </div>             
                </div>
            </div>
        )
    }
}