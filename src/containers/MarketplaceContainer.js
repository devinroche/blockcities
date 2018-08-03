import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import Navbar from './NavContainer';
import Footer from './FooterContainer';
import styles from '../theme/styles/Containers.style';
import Marketplace from '../components/Marketplace';

const MarketplaceContainer = props => (
    <Grid style={styles.grid}>
        <Navbar navigation={props.navigation} />
        <Row size={75}>
            <Col size={5} />
            <Col size={90} >
                <Marketplace />
            </Col>
            <Col size={5} />
        </Row>
        <Footer navigation={props.navigation} />
    </Grid>
);

const mapStateToProps = state => (state.reducer);

export default connect(mapStateToProps)(MarketplaceContainer);
