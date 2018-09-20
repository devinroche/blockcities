import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from '../../theme/styles/Icon.style';
// import market from '../../../assets/img/Rectangle.png';
// import market_dark from '../../../assets/img/market_dark.png';
import Market from '../SVGS/Market'

const LeftBtn = ({ navigation, darkMode, hideSearch, searchShowing }) => {
    const elColor = darkMode ? "#3258A8" : "#CFD1D4"

    return (
        <TouchableOpacity activeOpacity={1} onPress={() => {
            if(searchShowing) hideSearch()
            navigation.navigate('Marketplace')
        }}>
            {/* <Image source={icon} style={{width: 12, height: 16}} /> */}
            <Market color={elColor}/>
        </TouchableOpacity>
    );
};

export default LeftBtn;
