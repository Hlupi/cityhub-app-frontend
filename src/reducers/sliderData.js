import { FETCH_SLIDER_DATA } from "../actions/sliderData";

// const dummyData = [
//     {
//       source: 'instagram',
//       display_url: 'https://scontent-ams3-1.cdninstagram.com/vp/fe8329f4b31326cc0dbc1a9e746b8afc/5BF71043/t51.2885-15/e35/36921060_1072025149623425_1488633031978647552_n.jpg?se=8',
//       text: 'Summer is here - and so are we. Follow us for launch update! #rotterdamhiddengems',
//       hashtag: 'cityhubrotterdam'
//     },
//     {
//       source: 'instagram',
//     display_url: 'https://scontent-ams3-1.cdninstagram.com/vp/fdb8c2d980b5ae493b3767260a17b756/5BDF9E34/t51.2885-15/e35/36622537_1791920194229328_311773535737479168_n.jpg',
//     text: 'Late night cocktails with a view ❤️#amsterdam #cityhubamsterdam #madamamsterdam',
//     hashtag: 'cityhubamsterdam'
//     }
// ]

export default function (state = [], action) {
    switch (action.type) {
      case FETCH_SLIDER_DATA:
        return [...state,action.payload.hashtags]
       
      default:
        return state
    }
  }