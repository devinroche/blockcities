import React from 'react'
import {Svg} from 'expo'

const Profile = ({color}) => (
  <Svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Svg.Ellipse cx="9.38813" cy="5.78947" rx="5.97284" ry="5.78947" fill={color}/>
    <Svg.Rect x="0.157471" y="13.6842" width="18.4615" height="6.31578" rx="1" fill={color}/>
  </Svg>
)

export default Profile