import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from '../../theme/styles/Icon.style';
// import home from '../../../assets/img/home.png';
// import home_dark from '../../../assets/img/home_dark.png';
import Home from '../SVGS/Home'

const CenterBtn = ({ navigation, darkMode }) => {
    const elColor = darkMode ? "#3258A8" : "#CFD1D4"

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            {/* <Image source={icon} style={{width: 22, height: 19}} /> */}
            <Home color={elColor} />
        </TouchableOpacity>
    );
};

export default CenterBtn;
