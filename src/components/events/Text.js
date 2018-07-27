import React, {PureComponent} from 'react'
import '../carousel.css'

export default class Text extends PureComponent {
    state = {}
    render() {
        return (            
            <div className='divSlide'>
                {/* <img src="http://itsaboutpeople.co.za/wp-content/uploads/2017/02/business-people-1.jpg" width='60%'/> */}
                <h1>{this.props.data.name}</h1>
                <p>{this.props.data.text}</p>                
            </div>
        )
    }
}