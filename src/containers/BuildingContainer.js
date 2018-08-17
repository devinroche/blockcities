import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import Navbar from './NavContainer';
import Footer from './FooterContainer';
import Followers from '../components/Followers';
import BuildingList from '../components/BuildingList';
import styles from '../theme/styles/Profile.style';
import BuildingPage from '../components/Building/BuildingPage'

const BuildingContainer = props => {
    console.log(props.currentBuilding)
    return (
        <Grid style={styles.grid}>
            <Navbar navigation={props.navigation} />
            <Row size={75}>
                <Col size={2.5} />
                <Col size={95}>
                    <Row size={94}>
                        {/* <BuildingPage navigation={props.navigation} item={props.building}/> */}
                    </Row>
                </Col>
                <Col size={2.5} />
            </Row>
            <Footer navigation={props.navigation} />
        </Grid>
    );
}

const mapStateToProps = state => (
    state.buildingReducer
)

export default connect(mapStateToProps)(BuildingContainer);
