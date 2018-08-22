import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid'
import style from '../../theme/styles/BuildingPage.style';
import font from '../../theme/styles/Typography.style';

const ContentCol = ({ header, detail, ext }) => {
    if(detail == "") detail = 'Unknown'
    return (
        <Col size={3}>
            <Row>
                <Text style={font.buildingContentHead}>{header}</Text>
            </Row>
            <Row>
                <Text style={font.buildingContent}>{detail} {ext}</Text>
            </Row>
        </Col>
    );
}

const ContentRow = ({ header, detail }) => {
    if(detail == "") detail = 'Unknown'

    return (
        <Grid>
            <Row size={12}>
                    <Text style={font.buildingContentHead}>{header}</Text>
                </Row>
                <Row size={12}>
                    <Text style={font.buildingContent}>{detail}</Text>
                </Row>
            </Grid>
    );
}

export {ContentCol, ContentRow};