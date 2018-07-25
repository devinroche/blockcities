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

class BuildingList extends React.Component {
    constructor(props){
        super(props)
    }
    renderItem(item, itemSize, itemPaddingHorizontal) {
        console.log(itemSize)
        return(
          <TouchableOpacity
            key = { item.id }
            style = {{ width: 160, height: 200, paddingHorizontal: itemPaddingHorizontal }}
            onPress = { () => { console.log('fart')}}>
            <Image
              resizeMode = "cover"
              style = {{ flex: 1}}
              source = {{ uri: item.src }}
            />
          </TouchableOpacity>
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
                    itemPaddingHorizontal={10}
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
    }
}