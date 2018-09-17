import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { Svg, Constants } from 'expo';

import bc_logo from '../../../assets/img/login-image.png'
import pa from '../../../assets/img/pa.png'

const style = {
    container: {
        alignItems: 'center',
    },
};
const CenterBtn = ({ navigation, user, is_logo }) => {
    let logo = is_logo ? bc_logo : pa
    return (
        <TouchableOpacity style={style.container} onPress={() => navigation.navigate('Profile')}>
          <Image source={logo} style={{width: 50, height: 50}}/>
        </TouchableOpacity>
    );
}

export default CenterBtn;
