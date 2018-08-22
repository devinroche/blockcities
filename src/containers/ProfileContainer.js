import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Text} from 'react-native'
import { connect } from 'react-redux';
import Navbar from './NavContainer';
import Footer from './FooterContainer';
import Followers from '../components/Followers';
import BuildingList from '../components/BuildingList';
import styles from '../theme/styles/Profile.style';
import {currentBuilding} from '../redux/building/actions'
import fonts from '../theme/styles/Typography.style'

const ProfileContainer = props => {
    const {buildingReducer, signupReducer} = props
    console.log(signupReducer.user)
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
}

const mapStateToProps = state => {
    return {
        buildingReducer: state.buildingReducer,
        signupReducer: state.signupReducer
    }
}

const mapDispatchToProps = {
    currentBuilding
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
