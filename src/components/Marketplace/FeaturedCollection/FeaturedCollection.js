import React from 'react';
import { Row, Grid, Col } from 'react-native-easy-grid';
import {Text, Image, ScrollView, View, TouchableOpacity} from 'react-native'
import font from '../../../theme/styles/Typography.style';
import btnStyles from '../../../theme/styles/CreateAccount.style';
import collection from '../../../utils/collection.png'
import tc from '../../../utils/limited_edition_set.png'
import IncludedBuildings from './IncludedBuildings'
import BuildingFeatures from './BuildingFeatures'
import CollectionFooter from './CollectionFooter'

const FeaturedCollection = () => {
    return (
        <ScrollView>
            <Grid>
                <Row size={2}>
                    <Image source={collection} resizeMode="contain" style={{width: 360, height: 360}}/>
                </Row>
                <Row size={2} style={{paddingBottom: 20}}>
                    <Text style={font.infoFeature}>
                    The Terminus Towers are an iconic set of office and condo buildings set in the heart of Buckhead Atlanta. They’re named after Atlanta’s original name “Terminus,” coined due to the numerous railroad crossings that built Atlanta from a train depot to a bustling Southern city. 
                    </Text>
                </Row>
                <Row size={1} style={{ paddingVertical: 20, justifyContent: 'center'}}>
                    <Text style={font.featureHead}>Included Buildings</Text>
                </Row>
                <IncludedBuildings />
                <Row size={1} style={{ paddingVertical: 20, justifyContent: 'center'}}>
                    <Text style={font.featureHead}>Features</Text>
                </Row>
                <BuildingFeatures />
                <CollectionFooter/>
            </Grid>
        </ScrollView>
    );
}

export default FeaturedCollection;