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
          }} style={{marginBottom: 40, justifyContent: 'center'}}>
            <Row size={2} style={{ justifyContent: 'center', alignSelf: 'center', paddingBottom: 5, width: 360, height: 460, borderRadius: 7, backgroundColor: `#${el.Color}`}}>
              <Image source={{uri: el.ImageURL}} resizeMode="contain" style={{ width: 167, height: 337, alignSelf: 'center' }} />
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
