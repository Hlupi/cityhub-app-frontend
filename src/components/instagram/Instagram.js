import React, {PureComponent} from 'react'
import '../carousel.css'

export default class Instagram extends PureComponent {
    state = {}

    datasample = {
        "comment_count": 0,
        "created_at": "2018-07-26T05:51:48.741Z",
        "date": "2018-07-24T22:00:00.000Z",
        "display_url": "https://scontent-ams3-1.cdninstagram.com/vp/b5d4df758ee43010578a3239c36d36ed/5BF4A21D/t51.2885-15/e35/37182273_2145646225715803_5241687918942093312_n.jpg?_nc_eui2=AeF6nv1rFCfYZig9Iz67Fs4nU4Z0ZMsi3BV__KMJmz1FsFP3WtwAY8y2YGpdBFxmDyMFG4T-Sp_4BooLIokqIuPr&se=7",
        "hashtag": "cityhubamsterdam",
        "id": 2523,
        "like_count": 12,
        "media_id": "1831373996789555389",
        "source": "instagram",
        "status": "accepted",
        "text": "I still can't get over how sick this room was. Definitely recommend @cityhub for short breaks \n#cityhubamsterdam #amsterdam #bed #led #rainbow"
    }
    render() {
        return (
            <div>
            <div className='divSlide'>
                <img src={ this.datasample.display_url} />         
            </div>

            <div className='legend'>
                <h1>{this.props.name}</h1>
                <p>Rob is a Dutch guy!</p>
            </div>

            </div>
        )
    }
}