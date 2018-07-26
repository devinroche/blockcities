import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import PhotoGrid from 'react-native-image-grid';
import Building from './Building';

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

class BuildingList extends React.Component {
    constructor(props){
        super(props)
    }
    renderItem(item, itemSize, itemPaddingHorizontal) {
        return(
          <Building key={item.id} item={item} itemSize={itemSize} itemPaddingHorizontal={itemPaddingHorizontal}/>
        )
      }

    render(){
        const {buildings} = this.props.profile
        return (
            <ScrollView style={styles.container}>
                <PhotoGrid
                    data = { buildings }
                    itemsPerRow = { 2 }
                    itemMargin = { 1 }
                    itemPaddingHorizontal={6}
                    renderItem = { this.renderItem }
                />
            </ScrollView>
        );
    }
}

export default BuildingList

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