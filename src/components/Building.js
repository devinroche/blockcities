import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import PhotoGrid from 'react-native-image-grid';

const styles = {
    container: {
        flex: 1, 
        width: 400
    },
    grid: {
        flex: 1,
        alignItems: 'center',
    },
};

class Building extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }

    render(){
        const {item, itemSize, itemPaddingHorizontal} = this.props
        return (
            <TouchableOpacity
            style = {{ width: 160, height: 250, paddingHorizontal: itemPaddingHorizontal }}
            onPress = { () => { console.log(item)}}>
                <Image
                resizeMode = "cover"
                style = {{ flex: 1,  borderRadius: 10}}
                source = {{ uri: item.src }}
                />
                <Text style={style.buildingHead}>Building #{item.id}</Text>
                <Text style={style.subBuildingText}>Era {Math.floor(Math.random() * 5)} - Foo Bar</Text>
                <Text style={style.buyText}>&#128184; Buy 0.0{Math.floor(Math.random() * 99)}</Text>
          </TouchableOpacity>
        );
    }
}

export default Building

const style = {
    number: {
        color: '#1e3799',
        fontWeight: 'bold',
        fontSize: 18
    },
    text: {
        color: "#95a5a6",
    },
    buildingHead : {
        paddingTop: 5,
        fontSize: 14,
        color: '#000000'
    },
    subBuildingText: {
        fontSize: 12,
        color: '#1e3799',
    },
    buyText: {
        color: "#95a5a6",
        fontSize: 10,
        paddingBottom: 5
    }
}