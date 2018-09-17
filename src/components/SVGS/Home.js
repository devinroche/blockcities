import React from 'react'
import {Svg} from 'expo'

const Home = ({color}) => (
  <Svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Svg.Rect x="14.5261" y="0.0526123" width="18.9473" height="5.26315" rx="1" transform="rotate(90 14.5261 0.0526123)" fill={color}/>
    <Svg.Rect x="6.10498" y="5.31577" width="13.6842" height="5.26315" rx="1" transform="rotate(90 6.10498 5.31577)" fill={color}/>
    <Svg.Rect x="22.947" y="5.31577" width="13.6842" height="5.26315" rx="1" transform="rotate(90 22.947 5.31577)" fill={color}/>
  </Svg>
)

export default Home