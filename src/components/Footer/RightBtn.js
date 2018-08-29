import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from '../../theme/styles/Icon.style';
import person from '../../../assets/img/person.png'
import person_dark from '../../../assets/img/person_dark.png'

const RightBtn = ({ navigation, darkMode }) => {
    const icon = darkMode ? person_dark : person;

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={icon} />
        </TouchableOpacity>
    );
};

export default RightBtn;
