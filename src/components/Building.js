import React from 'react';
import {
    Text, Image, TouchableOpacity, View, Dimensions,
} from 'react-native';
import Lightbox from 'react-native-lightbox';
import style from '../theme/styles/Building.style';

class Building extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { item, updateBuilding, redirect } = this.props;
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={style.touch}
                onPress={() => {
                    updateBuilding(item);
                    redirect();
                }}
            >
                <View style={[style.container,
                    { backgroundColor: `#${item.Color}` },
                ]}
                >
                    <Image
                        style={style.img}
                        source={{ uri: item.ImageURL }}
                        resizeMode="contain"
                    />
                </View>
                <View style={{paddingLeft: 7.5}}>
                    <Text style={style.buildingHead}>{item.Name}</Text>
                    <Text style={[style.subBuildingText, {fontSize: 12}]}>Era {Math.floor(Math.random() * 5)} - {item.City} - { randStats() }</Text>
                    <Text style={style.buyText}> &#128184; Buy {(Math.random() * (0.04 - 0.01) + 0.01).toFixed(3)}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
export default Building;

const randColors = [
    '#ffedc1',
    '#f0dddc',
    '#b1cafb',
    '#b9dbf0',
];

const randStats = () => {
    const status = ['Slow Build', 'Normal Build', 'Fast Build'];
    return status[Math.floor(Math.random() * 3)];
};
