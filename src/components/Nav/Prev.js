import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
// import xbtn from '../../../assets/img/xbtn.png';
import XBtn from '../SVGS/XBtn';

const BackBtn = ({ navigation, toggleSearch }) => {
    return (
        <TouchableOpacity onPress={() => {
            toggleSearch();
            navigation.goBack();
        }}
        >
            {/* <Image source={xbtn} style={{width: 15, height: 15}}/> */}
            <XBtn />
        </TouchableOpacity>
    );
};

export default BackBtn;
