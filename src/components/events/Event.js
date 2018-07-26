import React, {PureComponent} from 'react'

export default class Event extends PureComponent {
    state = {}

    render() {
            if (event.image===null && event.address===null) return (
                <div>
                    <p>{event.description}</p>
                </div>
            )
            else if (event.address === null) return (
                <div>
                    <img src={event.image} alt="" />
                    <p>{event.description}</p>
                </div>
            )
            
            else if (event.image === null) return (
                <div>
                    <p>{event.address}</p> 
                    <p>{event.description}</p>
                </div>
            )            
            else return (
                <div>
                    <img src={event.image} alt="" />
                    <p>{event.address}</p> 
                    <p>{event.description}</p>
                </div>               
            )
    }       
}

// {
//     if (event.image===null && event.address===null) return event.description
//     else if (event.address === null) return event.image && event.description
//     else if (event.image === null) return event.address && event.description
//     else return (event.image&&event.address&&event.description) 
// } 