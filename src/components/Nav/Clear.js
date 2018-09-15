import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import xbtn from '../../../assets/img/xbtn.png';

const ClearBtn = ({ navigation, profile, clearSearch }) => {
    return (
        <TouchableOpacity onPress={() => {
            clearSearch('');
            // navigation.goBack();
        }}
        >
            <Image source={xbtn} style={{width: 15, height: 15}}/>
        </TouchableOpacity>
    );
};

export default ClearBtn;
