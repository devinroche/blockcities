import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import style from '../../theme/styles/BuildingPage.style';
import font from '../../theme/styles/Typography.style';

const Header = ({ name, status }) => (
    <View style={style.paddedRow}>
        <Text style={[style.buildingHead, font.buildingHead]}>{name}</Text>
        <Text style={style.subBuildingText}>Era {Math.floor(Math.random() * 5)} - Foo Bar - {status} </Text>
    </View>
);

export default Header;