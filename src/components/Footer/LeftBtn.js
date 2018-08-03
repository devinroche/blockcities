import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from '../../theme/Icon.style';

const LeftBtn = ({ navigation, darkMode }) => {
    const style = darkMode ? styles.dark : styles.light;

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Marketplace')}>
            <Icon name="notebook" size={20} color={style} />
        </TouchableOpacity>
    );
};

export default LeftBtn;
