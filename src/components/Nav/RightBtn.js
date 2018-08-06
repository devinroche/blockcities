import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from '../../theme/styles/Icon.style';

const RightBtn = ({ navigation, darkMode }) => {
    const style = darkMode ? styles.dark : styles.light;

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Icon name="options" size={20} color={style} />
        </TouchableOpacity>
    );
};

export default RightBtn;
