import React from 'react';
import {
    Text, ScrollView, TouchableOpacity, View, StyleSheet, Image
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import style from '../../theme/styles/BuildingPage.style';
import Btn from './Btn';
import Header from './Header';
import { ContentCol, ContentRow } from './Content';
import { Transition } from 'react-navigation-fluid-transitions';
import font from '../../theme/styles/Typography.style';
import BuildingFeatures from './BuildingFeatures'

class BuildingPage extends React.Component {
    constructor(props){
      super(props);
      this.state = {
      };
    };

    render() {
        const { item } = this.props;
        return (
            <Transition appear="scale" disappear="bottom">
                <ScrollView contentContainerStyle={style.body}>
                    <View style={[style.container, { backgroundColor: `#${item.Color}` },]}>
                        <TouchableOpacity style={style.touch}>
                            <Image
                                style={style.img}
                                source={{ uri: item.ImageURL }}
                                minimumZoomScale={0.5}
                                maximumZoomScale={3}
                                androidScaleType="center"
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                      </View>
                    <Grid>
                        <Header name={item.Name} status={randStats()} city={item.City} />
                        <Row style={style.paddedRow}>
                            <Btn title="Sell Building" unicode="label" />
                            <Btn title="Sell Blueprint" unicode="page_facing_up" />
                            <Btn title="Gift" unicode="gift" />
                        </Row>
                        <Row
                            style={[style.paddedRow, {
                                borderBottomColor: '#F2F2F2',
                                borderBottomWidth: 1,
                            }]}
                        />
                        <Row style={style.paddedRow}>
                            <Text style={font.buildingHead}>Architecture</Text>
                        </Row>
                        <Row style={style.paddedRow}>
                            <Grid>
                                <ContentCol header="Built" detail={`${item.Built}`} />
                                <ContentCol header="Height" detail={item.Height} ext="ft" />
                            </Grid>
                        </Row>
                        <Row style={style.paddedRow}>
                            <ContentRow header="Architects" detail={`${item.Architect}`} />
                        </Row>
                        <Row style={style.paddedRow}>
                            <Text style={font.buildingDetails}>{item.Summary}</Text>
                        </Row>
                        <Row>
                            <Col size={6}>
                                <BuildingFeatures />
                            </Col>
                            <Col size={6}>
                                <BuildingFeatures />
                            </Col>
                        </Row>
                    </Grid>
                </ScrollView>
            </Transition>
        );
    }
}
export default BuildingPage;

const randStats = () => {
    const status = ['Slow Build', 'Normal Build', 'Fast Build'];
    return status[Math.floor(Math.random() * 3)];
};
