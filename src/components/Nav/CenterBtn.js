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
    let zt = is_logo ? {width: 63, height: 50} : {width: 50, height: 50}
    return (
        <TouchableOpacity activeOpacity={1} style={style.container} onPress={() => navigation.navigate('Profile')}>
          <Image source={logo} style={zt}/>
        </TouchableOpacity>
    );
}

export default CenterBtn;
