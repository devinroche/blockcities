import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import Navbar from './Navigation/NavContainer';
import ProfileSearch from './Navigation/ProfileSearch';
import Footer from './Navigation/FooterContainer';
import BuildingList from '../components/BuildingList';
import styles from '../theme/styles/Profile.style';
import style from '../theme/styles/Followers.style';
import { currentBuilding } from '../redux/building/actions';

const ProfileContainer = (props) => {
    const { buildingReducer, signupReducer } = props;
    return (
        <Grid style={styles.grid}>
            <Col size={2} />
            <Col size={96}>
                <ProfileSearch navigation={props.navigation} />
                <Row size={81}>
                  <Grid style={style.container}>
                    <Row size={10}>
                      <BuildingList
                          user={signupReducer.user}
                          buildings={buildingReducer.userBuildings}
                          navigation={props.navigation}
                          updateBuilding={props.currentBuilding}
                      />
                    </Row>
                  </Grid>
                </Row>
                <Footer navigation={props.navigation} />
            </Col>
            <Col size={2} />
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