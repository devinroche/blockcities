import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import Navbar from './Navigation/NavContainer';
import Footer from './Navigation/FooterContainer';
import BuildingList from '../components/BuildingList';
import styles from '../theme/styles/Profile.style';
import { currentBuilding } from '../redux/building/actions';

const ProfileContainer = (props) => {
    const { buildingReducer, signupReducer } = props;
    return (
        <Grid style={styles.grid}>
            <Row size={85}>
                <Col size={2} />
                <Col size={96}>
                    <Navbar navigation={props.navigation} />
                    <Row size={92}>
                        <BuildingList
                            user={signupReducer.user}
                            buildings={buildingReducer.buildingList}
                            navigation={props.navigation}
                            updateBuilding={props.currentBuilding}
                        />
                    </Row>
                </Col>
                <Col size={2} />
            </Row>
            <Footer navigation={props.navigation} />
        </Grid>
    );
};

const mapStateToProps = state => ({
    buildingReducer: state.buildingReducer,
    signupReducer: state.signupReducer,
});

const mapDispatchToProps = {
    currentBuilding,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
