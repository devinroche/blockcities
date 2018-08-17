import React from 'react';
import { ScrollView } from 'react-native';
import PhotoGrid from 'react-native-image-grid';
import Building from './Building';
import styles from '../theme/styles/BuildingList.style';

export default class BuildingList extends React.Component {
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
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

    render() {
        const userBuildings = randArr(this.props.buildings)
        return (
            <ScrollView style={styles.container}>
                <PhotoGrid
                    data={userBuildings}
                    itemsPerRow={2}
                    itemMargin={10}
                    itemPaddingHorizontal={0}
                    renderItem={this.renderItem}
                />
            </ScrollView>
        );
    }
}

const randArr = (buildingArr) => {
    let numEl = Math.floor(Math.random() * 5) + 1
    let newArr = []
    while(numEl){
        newArr.push(buildingArr[Math.floor(Math.random() * buildingArr.length)])
        numEl--;
    }
    return newArr.filter((e, i) => newArr.indexOf(e) == i);
}