import React from 'react';
import { View, Image } from 'react-native';
import style from '../../theme/styles/BuildingPage.style';

const BuildingModal = ({current}) => {
    const { ImageURL } = current
    return (
      <View>
        <View style={{width: 76, height: 4, marginTop: 15, marginBottom: 5, backgroundColor: '#ffffff', borderRadius: 2, alignSelf: 'center'}}/>
      <View style={{justifyContent: 'center', width: '100%', height: '100%'}}>
        <Image
            style={{width: 400, height: 500, marginTop: -100}}
            source={{ uri: ImageURL }}
            resizeMode="contain"
        />
      </View>
      </View>
    );
}
export default BuildingModal;
