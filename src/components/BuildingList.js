import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import PhotoGrid from 'react-native-image-grid';
import {Row} from 'react-native-easy-grid';
import Building from './Building';
import styles from '../theme/styles/BuildingList.style';
import fonts from '../theme/styles/Typography.style'
import Followers from './Followers'

export default class BuildingList extends React.Component {
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
    }

    renderItem(item, itemSize, itemPaddingHorizontal) {
        return (
            <Building
                key={item.ID}
                item={item}
                itemSize={itemSize}
                updateBuilding={(item) => this.props.updateBuilding(item)}
                redirect={() => this.props.navigation.navigate('BuildingPage')}
                itemPaddingHorizontal={itemPaddingHorizontal}
            />
        );
    }
    renderHeader(){
        return (
            <View style={{paddingBottom: 15}}>
                <Row size={4} >
                    <Text style={[styles.centerContent, fonts.btnTextDark, {color: '#3258a8'}]}>{this.props.user.Name}</Text>
                </Row>
                <Row size={4} style={{paddingVertical: 5}}>
                    <Text style={[styles.centerContent, fonts.info]}>@{this.props.user.Username}</Text>
                </Row>
                <Row size={12} style={{paddingTop: 3, paddingBottom: 5}}>
                    <Followers {...this.props} />
                </Row>
            </View>
        )
    }
    render() {
        const userBuildings = randArr(this.props.buildings)
        return (
            <ScrollView style={styles.container}>
                <PhotoGrid
                    data={userBuildings}
                    itemsPerRow={2}
                    itemMargin={1}
                    itemPaddingHorizontal={1}
                    renderHeader = { this.renderHeader }
                    renderItem={this.renderItem}
                />
            </ScrollView>
        );
    }
}

const randArr = (buildingArr) => {
    let numEl = Math.floor(Math.random() * (6 - 3 + 1)) + 3
    let newArr = []
    while(numEl){
        newArr.push(buildingArr[Math.floor(Math.random() * buildingArr.length)])
        numEl--;
    }
    return newArr.filter((e, i) => newArr.indexOf(e) == i);
}