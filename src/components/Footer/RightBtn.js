import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from '../../theme/styles/Icon.style';
import person from '../../../assets/img/person.png';
import person_dark from '../../../assets/img/person_dark.png';
import Profile from '../SVGS/Profile'

const RightBtn = ({ navigation, darkMode }) => {
    const elColor = darkMode ? "#3258A8" : "#CFD1D4"

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            {/* <Image source={icon} style={{width: 18, height: 20}} /> */}
            <Profile color={elColor}/>
        </TouchableOpacity>
    );
};

export default RightBtn;
