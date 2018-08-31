import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import Navbar from './Navigation/NavContainer';
import Footer from './Navigation/FooterContainer';
import styles from '../theme/styles/Profile.style';
import FeaturedCollection from '../components/Marketplace/FeaturedCollection/FeaturedCollection';

const FeaturedContainer = props => (
    <Grid style={styles.grid}>
        <Row size={75}>
            <Col size={5} />
            <Col size={90}>
                <Navbar navigation={props.navigation} logo/>
                <Row size={94}>
                    <FeaturedCollection />
                </Row>
            </Col>
            <Col size={5} />
        </Row>
        <Footer navigation={props.navigation} />
    </Grid>
);

const mapStateToProps = state => (
    state.buildingReducer
);

export default connect(mapStateToProps)(FeaturedContainer);
