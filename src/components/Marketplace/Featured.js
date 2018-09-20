import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import home from '../../../assets/img/home.png';
import home_dark from '../../../assets/img/home_dark.png';

const CenterBtn = ({ navigation, darkMode }) => {
    const icon = darkMode ? home_dark : home;

    return (
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Home')}>
            <Image source={icon} />
        </TouchableOpacity>
    );
};

export default CenterBtn;
