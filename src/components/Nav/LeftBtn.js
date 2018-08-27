import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import searchIcon from '../../utils/search.png';
import styles from '../../theme/styles/Icon.style';

const LeftBtn = ({ navigation, darkMode }) => {
    const style = darkMode ? styles.dark : styles.light;

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image source={searchIcon}/>
        </TouchableOpacity>
    );
};

export default LeftBtn;
