import React from 'react';
import { TouchableOpacity } from 'react-native';
// import xbtn from '../../../assets/img/xbtn.png';
import XBtn from '../SVGS/XBtn'

const BackBtn = ({ navigation, toggleSearch }) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
            {/* <Image source={xbtn} style={{width: 15, height: 15}}/> */}
            <XBtn />
        </TouchableOpacity>
    );
};

export default BackBtn;
