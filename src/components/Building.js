import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import style from '../theme/Building.style';

const Building = ({ item }) => (
    <TouchableOpacity
        style={style.touch}
        onPress={() => { console.log(item); }}
    >
        <Image
            resizeMode="cover"
            style={style.img}
            source={{ uri: item.src }}
        />
        <Text style={style.buildingHead}>Building #{item.id}</Text>
        <Text style={style.subBuildingText}>Era {Math.floor(Math.random() * 5)} - Foo Bar</Text>
        <Text style={style.buyText}> &#128184; Buy {(Math.random() * (0.04 - 0.01) + 0.01).toFixed(3)}</Text>
    </TouchableOpacity>
);

export default Building;
