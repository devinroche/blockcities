import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from '../../theme/styles/Icon.style';
import home from '../../utils/home.png'

const CenterBtn = ({ navigation, darkMode }) => {
    const style = darkMode ? styles.dark : styles.light;

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={home}/>
        </TouchableOpacity>
    );
};

export default CenterBtn;
