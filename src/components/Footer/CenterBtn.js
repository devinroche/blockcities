import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from '../../theme/styles/Icon.style';
import home from '../../utils/home.png'
import home_dark from '../../utils/home_dark.png'

const CenterBtn = ({ navigation, darkMode }) => {
    const icon = darkMode ? home_dark : home;

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={icon}/>
        </TouchableOpacity>
    );
};

export default CenterBtn;
