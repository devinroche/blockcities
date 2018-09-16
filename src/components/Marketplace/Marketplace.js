import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';
import { Text, View, Button } from 'react-native';
import PhotoGrid from 'react-native-image-grid';
import { connectInfiniteHits } from 'react-instantsearch/connectors';
import styles from '../../theme/styles/Followers.style';
import Building from '../Building';
import font from '../../theme/styles/Typography.style';
import LimitedEdition from './LimitedEdition';
import Filters from './Filters';
import FilterBtn from './FilterBtn';
import FilterView from './FilterView';

class Marketplace extends React.Component {
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
        this.renderTop = this.renderTop.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
    }

    renderItem(item, itemSize, itemPaddingHorizontal) {
        return (
            <Building
                key={item.ID}
                item={item}
                itemSize={itemSize}
                updateBuilding={item => this.props.updateBuilding(item)}
                redirect={() => this.props.navigation.navigate('BuildingPage')}
                itemPaddingHorizontal={itemPaddingHorizontal}
            />
        );
    }

    renderTop() {
        if (this.props.isSearch) {
            return <Filters />
        }
    }

    renderHeader() {
      if(!this.props.isSearch){
      return (
          <View>
              <Row size={4} style={{alignSelf: 'center'}}>
                  <LimitedEdition navigation={this.props.navigation} />
              </Row>
              <Row size={4} style={{paddingVertical: 10, paddingLeft: 20}}>
                  <Text style={font.buildingHead}>Hall of Fame &#127941;</Text>
              </Row>
          </View>
      )
      }
  }
  
    render() {
        return (
            <Grid style={styles.container}>
              {this.props.isSearch ? <Row size={2.5}>
                {this.renderTop()}
              </Row> : ""}
                <Row size={10}>
                    <PhotoGrid
                        data={this.props.buildings}
                        renderHeader = { this.renderHeader }
                        itemsPerRow={2}
                        itemMargin={1}
                        itemPaddingHorizontal={1}
                        renderItem={this.renderItem}
                    />
                    {this.props.isSearch ? <FilterBtn toggleFilters={this.props.toggleFilters} />: ""}
                </Row>
            </Grid>
        );
    }
}

export default Marketplace;
