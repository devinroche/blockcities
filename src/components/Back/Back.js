import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import backBtn from '../../../assets/img/back_btn.png';

const Back = ({ navigation, logo }) => {
  let isPadded = logo ? 30 : 0
  return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backBtn} style={{width: 18, height: 15, marginLeft: 30}}/>
      </TouchableOpacity>
  );
}

export default Back;
