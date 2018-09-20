import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from '../../theme/styles/Icon.style';
// import gear from '../../../assets/img/gear.png';
import Gear from '../SVGS/Gear'

const RightBtn = ({ navigation, darkMode }) => {
    const style = darkMode ? styles.dark : styles.light;

    return (
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Settings')} style={{alignItems: 'flex-end'}}>
            <Gear />
        </TouchableOpacity>
    );
};

export default RightBtn;
