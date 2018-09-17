import React from 'react';
import { Row, Grid, Col } from 'react-native-easy-grid';
import { Text, Image, ScrollView, Dimensions, View } from 'react-native';
import font from '../../../theme/styles/Typography.style';
import collection from '../../../../assets/img/collection.png';
import IncludedBuildings from './IncludedBuildings';
import BuildingFeatures from './BuildingFeatures';
import CollectionFooter from './CollectionFooter';
import { Transition } from 'react-navigation-fluid-transitions';

const FeaturedCollection = ({toggleHeaderColor, currentBuilding, navigation}) => {
  handleScroll = (event) => {
    if(event.nativeEvent.contentOffset.y <= 335){
      toggleHeaderColor(true)
    }
    if(event.nativeEvent.contentOffset.y > 335){
      toggleHeaderColor(false)
    }
   }

return (
    // <Transition appear={"scale"}>
        <ScrollView onScroll={this.handleScroll} scrollEventThrottle={1} style={{backgroundColor: "#f2f2f2"}}>
            <Grid>
                  <Row size={2} style={{width: Dimensions.get('window').width, height: 380, backgroundColor: "#F2F2F2", paddingHorizontal: 20}}>
                      <Image source={collection} resizeMode="contain" style={{ width: 360, height: 360 }} />
                  </Row>
                  <Col size={90}>
                <Row size={2} style={{ paddingBottom: 20, paddingHorizontal: 20, width: Dimensions.get('window').width, backgroundColor: "#ffffff",}}>
                    <Text style={font.infoFeature}>
                        The Terminus Towers are an iconic set of office and condo buildings set in the heart of Buckhead Atlanta. They’re named after Atlanta’s original name “Terminus,” coined due to the numerous railroad crossings that built Atlanta from a train depot to a bustling Southern city.
                    </Text>
                </Row>
                <Row size={1} style={{ paddingVertical: 20, justifyContent: 'center', width: Dimensions.get('window').width, backgroundColor: "#ffffff"}}>
                    <Text style={font.featureHead}>Included Buildings</Text>
                </Row>
                <IncludedBuildings currentBuilding={currentBuilding} navigation={navigation}/>
                <Row size={1} style={{ paddingVertical: 20, justifyContent: 'center', width: Dimensions.get('window').width, backgroundColor: "#ffffff" }}>
                    <Text style={font.featureHead}>Features</Text>
                </Row>
                <View style={{width: '100%', backgroundColor: '#ffffff'}}>
                <BuildingFeatures />
                </View>
                </Col>
                <Row size={2} style={{width: Dimensions.get('window').width, backgroundColor: "#F2F2F2", paddingTop: 20}}>
                  <CollectionFooter />
                </Row>
            </Grid>
        </ScrollView>
    // </Transition>
);
}

export default FeaturedCollection;
