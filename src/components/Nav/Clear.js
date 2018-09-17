import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import xbtn from '../../../assets/img/xbtn.png';

const ClearBtn = ({ navigation, profile, clearSearch}) => {
    return (
        <TouchableOpacity onPress={() => {
          clearSearch('')
          
        }}>
            <Image source={xbtn} style={{width: 15, height: 15, alignSelf: 'flex-end'}}/>
        </TouchableOpacity>
    );
};

export default ClearBtn;
