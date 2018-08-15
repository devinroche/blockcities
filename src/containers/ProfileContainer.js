import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import Navbar from './NavContainer';
import Footer from './FooterContainer';
import Followers from '../components/Followers';
import BuildingList from '../components/BuildingList';
import styles from '../theme/styles/Profile.style';

const ProfileContainer = props => (
    <Grid style={styles.grid}>
        <Navbar navigation={props.navigation} />
        <Row size={75}>
            <Col size={5} />
            <Col size={90}>
                <Row size={10}>
                    <Followers {...props} />
                </Row>
                <Row size={94}>
                    <BuildingList {...props} />
                </Row>
            </Col>
            <Col size={5} />
        </Row>
        <Footer navigation={props.navigation} />
    </Grid>
);

export default ProfileContainer;
