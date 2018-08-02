import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';

const style = {
    touch: {
        width: 160, height: 250, paddingHorizontal: 20,
    },
    number: {
        color: '#1e3799',
        fontWeight: 'bold',
        fontSize: 18,
    },
    text: {
        color: '#95a5a6',
    },
    buildingHead: {
        paddingTop: 5,
        fontSize: 14,
        color: '#000000',
    },
    subBuildingText: {
        fontSize: 12,
        color: '#1e3799',
    },
    buyText: {
        color: '#95a5a6',
        fontSize: 10,
        paddingBottom: 5,
    },
    img: {
        flex: 1, borderRadius: 10,
    },
};

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
        <Text style={style.buildingHead}>
Building #
            {item.id}
        </Text>
        <Text style={style.subBuildingText}>
Era
            {Math.floor(Math.random() * 5)}
            {' '}
- Foo Bar
        </Text>
        <Text style={style.buyText}>
&#128184; Buy
            {(Math.random() * (0.04 - 0.01) + 0.01).toFixed(3)}
        </Text>
    </TouchableOpacity>
);

export default Building;
