import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import Navbar from './NavContainer';
import Footer from './FooterContainer';

const styles = {
    grid: {
        backgroundColor: '#ffffff',
    },
    topRow: {
        paddingTop: 40,
        paddingBottom: 10,
    },
    bottomRow: {
        paddingTop: 10,
        borderTopWidth: 0.5,
        borderTopColor: '#95a5a6',
    },
};

const MarketplaceContainer = props => (
    <Grid style={styles.grid}>
        <Row size={10} style={styles.topRow}>
            <Navbar navigation={props.navigation} />
        </Row>
        <Row size={75}>
            <Col size={5} />
            <Col size={90}>
                <Row size={100}>
                    <Text>marketplace page</Text>
                </Row>
            </Col>
            <Col size={5} />
        </Row>
        <Row size={6} style={styles.bottomRow}>
            <Footer navigation={props.navigation} />
        </Row>
    </Grid>
);

const mapStateToProps = state => (state.reducer);

export default connect(mapStateToProps)(MarketplaceContainer);
