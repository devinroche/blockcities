import React from 'react';
import { Text, Image, TouchableOpacity, View, Dimensions } from 'react-native';
import style from '../theme/styles/Building.style';
import Lightbox from 'react-native-lightbox';

class Building extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            backgroundColor: randColors[Math.floor(Math.random() * 4)]
        }
    }
    render(){
        const {item} = this.props

        return (
            <TouchableOpacity style={style.touch}
                onPress={() => {
                    this.props.updateBuilding(item)
                    this.props.redirect()
                }}
            >
                <View style={[style.container,
                    { backgroundColor: this.state.backgroundColor}
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
            </TouchableOpacity>
        );
    }
}
export default Building;

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



