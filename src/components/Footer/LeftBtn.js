import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from '../../theme/styles/Icon.style';
import market from '../../utils/market.png'
import market_dark from '../../utils/market_dark.png'

const LeftBtn = ({ navigation, darkMode }) => {
    const icon = darkMode ? market_dark : market;

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Marketplace')}>
            <Image source={icon}/>
        </TouchableOpacity>
    );
};

export default LeftBtn;
