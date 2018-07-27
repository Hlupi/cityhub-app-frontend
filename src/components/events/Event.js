import React, {PureComponent} from 'react'
import '../carousel.css'

export default class Event extends PureComponent {
    state = {}

    render() {
        return (
            <div>
            <div className='divSlide'>
            <img src="http://itsaboutpeople.co.za/wp-content/uploads/2017/02/business-people-1.jpg" width='60%'/>
            </div>

            <div className='legend'>
                <h1>{this.props.name}</h1>
                <p>Rob is a Dutch guy!</p>
            </div>
            </div>
        )
    }
}
