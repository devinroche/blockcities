import React from 'react';
import { Text, Image, TouchableOpacity, View, Dimensions } from 'react-native';
import style from '../../theme/styles/Building.style';

const BuildingPage = ({item}) => (
    <View
        style={style.touch}
        onPress={() => {
            // this.props.updateBuilding(item)
        }}
    >
            <View style={[style.container,
            { backgroundColor: randColors[Math.floor(Math.random() * 4)]},
        ]}>
                    <Image
                        style={style.img}
                        source={{ uri: item.ImageURL }}
                        resizeMode="contain"
                    />
            </View>
        <Text style={style.buildingHead}>{item.Name}</Text>
        <Text style={style.subBuildingText}>Era {Math.floor(Math.random() * 5)} - {randStats()}</Text>
        <Text style={style.buyText}> &#128184; Buy {(Math.random() * (0.04 - 0.01) + 0.01).toFixed(3)}</Text>
    </View>
);
export default BuildingPage;

const randColors = [
    "#ffedc1",
    "#f0dddc",
    "#b1cafb",
    "#b9dbf0"
]

const randStats = () => {
    const status = ["Slow Build", "Normal Build", "Fast Build"]
    return status[Math.floor(Math.random() * 3)]
}



