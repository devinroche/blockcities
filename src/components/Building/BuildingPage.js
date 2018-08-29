import React from 'react';
import {
    Text, ScrollView, Image, TouchableOpacity, View, Dimensions,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Lightbox from 'react-native-lightbox';
import style from '../../theme/styles/BuildingPage.style';
import Btn from './Btn';
import Header from './Header';
import { ContentCol, ContentRow } from './Content';
import font from '../../theme/styles/Typography.style';

class BuildingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
            backgroundColor: randColors[Math.floor(Math.random() * 4)],
        };
    }

    render() {
        const { item } = this.props;
        return (
            <ScrollView contentContainerStyle={style.body}>
                <Lightbox
                    underlayColor="white"
                    onOpen={() => this.setState({ isOpened: true })}
                    onClose={() => this.setState({ isOpened: false })}
                >
                    <View style={[style.container,
                        { backgroundColor: this.state.backgroundColor },
                        this.state.isOpened && { flex: 1, width: Dimensions.get('window').width },
                    ]}
                    >
                        <Image
                            style={style.img}
                            source={{ uri: item.ImageURL }}
                            resizeMode="contain"
                        />
                    </View>
                </Lightbox>
                <Grid>
                    <Header name={item.Name} status={randStats()} />
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
                </Grid>
            </ScrollView>
        );
    }
}
export default BuildingPage;

const randColors = [
    '#ffedc1',
    '#f0dddc',
    '#b1cafb',
    '#b9dbf0',
];

const randStats = () => {
    const status = ['Slow Build', 'Normal Build', 'Fast Build'];
    return status[Math.floor(Math.random() * 3)];
};
