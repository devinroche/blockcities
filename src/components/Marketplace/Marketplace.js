import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';
import {Text, View} from 'react-native'
import styles from '../../theme/styles/Followers.style';
import PhotoGrid from 'react-native-image-grid';
import Building from '../Building'
import font from '../../theme/styles/Typography.style';
import LimitedEdition from './LimitedEdition'
import { connectInfiniteHits } from "react-instantsearch/connectors";

class Marketplace extends React.Component {
    constructor(props){
        super(props)
        this.renderItem = this.renderItem.bind(this)
        this.renderHeader = this.renderHeader.bind(this)
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
            <View>
                <Row size={4} style={{height: 160}}>
                    <LimitedEdition navigation={this.props.navigation}/>
                </Row>
                <Row size={4} style={{height: 40}}>
                    <Text style={font.buildingHead}>Hall of Fame &#127941;</Text>
                </Row>
            </View>
        )
    }

    render(){
        return (
            <Grid style={styles.container}>
                <Row size={10}>
                    <PhotoGrid
                        data={this.props.buildings}
                        renderHeader = { this.renderHeader}
                        itemsPerRow={2}
                        itemMargin={1}
                        itemPaddingHorizontal={1}
                        renderItem={this.renderItem}
                    />
                </Row>
            </Grid>
        );
    }
}

export default Marketplace;
