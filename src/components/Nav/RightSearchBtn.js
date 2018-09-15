import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from '../../theme/styles/Icon.style';
import xbtn from '../../../assets/img/xbtn.png';


const RightSearchBtn = ({ navigation, darkMode }) => {
    const style = darkMode ? styles.dark : styles.light;

    return (
        <TouchableOpacity onPress={() => console.log("clear search")}>
            <Image source={xbtn} style={{width: 15, height: 15, alignSelf: "flex-end"}}/>
        </TouchableOpacity>
    );
};

export default RightSearchBtn;