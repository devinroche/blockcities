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
                key={item.id}
                item={item}
                itemSize={itemSize}
                itemPaddingHorizontal={itemPaddingHorizontal}
            />
        );
    }

    render() {
        const { profile } = this.props;
        const { buildings } = profile;
        return (
            <ScrollView style={styles.container}>
                <PhotoGrid
                    data={buildings}
                    itemsPerRow={2}
                    itemMargin={1}
                    itemPaddingHorizontal={6}
                    renderItem={this.renderItem}
                />
            </ScrollView>
        );
    }
}
