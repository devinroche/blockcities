import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from '../../../theme/styles/Icon.style';
import gear from '../../../../assets/img/gear.png';

const RightBtn = ({ navigation, darkMode }) => {
    const style = darkMode ? styles.dark : styles.light;

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Image source={gear} style={{ alignSelf: 'flex-end' }} />
        </TouchableOpacity>
    );
};

export default RightBtn;