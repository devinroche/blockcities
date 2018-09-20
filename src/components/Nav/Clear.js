import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
// import xbtn from '../../../assets/img/xbtn.png';
import XBtn from '../SVGS/XBtn'

const ClearBtn = ({ navigation, profile, clearSearch}) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={() => {
          clearSearch('')
          
        }}>
            {/* <Image source={xbtn} style={{width: 15, height: 15, alignSelf: 'flex-end'}}/> */}
            <XBtn />
        </TouchableOpacity>
    );
};

export default ClearBtn;
