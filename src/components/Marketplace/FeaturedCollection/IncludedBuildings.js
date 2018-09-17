import React from 'react';
import { Row } from 'react-native-easy-grid';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import font from '../../../theme/styles/Typography.style';
import {includedBuildings} from './IncludedBuildingsData'

//updateBuilding(el)
const IncludedBuildings = ({currentBuilding, navigation}) => (
  <View style={{backgroundColor: '#ffffff'}}>
    {includedBuildings.map((el, i) => (
        <TouchableOpacity key={i} onPress={() => {
          currentBuilding(el)
          navigation.navigate('BuildingPage')
          }} style={{marginBottom: 40}}>
            <Row size={2} style={{ justifyContent: 'center', paddingBottom: 5}}>
              <Image source={{uri: el.ImageURL}} resizeMode="cover" style={{ width: 360, height: 480, borderRadius: 7 }} />
            </Row>
            <Row size={1} style={{ justifyContent: 'center', paddingTop: 5 }}>
                <Text style={font.title}>{el.Name}</Text>
            </Row>
            <Row size={2} style={{ justifyContent: 'center', paddingTop: 5 }}>
                <Text style={font.featurePrice}>`Era 0 - {el.City} - Instant Build`</Text>
            </Row>
        </TouchableOpacity>
    ))}
    </View>
);

export default IncludedBuildings;
