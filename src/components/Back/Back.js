import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import backBtn from '../../../assets/img/back_btn.png';

const Back = ({ navigation }) => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={backBtn} style={{width: 18, height: 15, alignSelf: 'center'}}/>
    </TouchableOpacity>
);

export default Back;
