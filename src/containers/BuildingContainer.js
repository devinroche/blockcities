import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import Navbar from './NavContainer';
import Footer from './FooterContainer';
import Followers from '../components/Followers';
import BuildingList from '../components/BuildingList';
import styles from '../theme/styles/Profile.style';
import BuildingPage from '../components/Building/BuildingPage';

const BuildingContainer = props => (
    <Grid style={styles.grid}>
        <Navbar navigation={props.navigation} />
        <Row size={75}>
            <Col size={5} />
            <Col size={90}>
                <Row size={94}>
                    <BuildingPage navigation={props.navigation} item={props.currentBuilding} />
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

export default connect(mapStateToProps)(BuildingContainer);
