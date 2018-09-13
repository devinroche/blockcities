import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from '../../theme/styles/Icon.style';
import market from '../../../assets/img/Rectangle.png';
import market_dark from '../../../assets/img/market_dark.png';

const LeftBtn = ({ navigation, darkMode, hideSearch, searchShowing }) => {
    const icon = darkMode ? market_dark : market;

    return (
        <TouchableOpacity onPress={() => {
            if(searchShowing) hideSearch()
            navigation.navigate('Marketplace')
        }}>
            <Image source={icon} style={{width: 12, height: 16}} />
        </TouchableOpacity>
    );
};

export default LeftBtn;
