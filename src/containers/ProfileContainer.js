import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import Navbar from './Navigation/NavContainer';
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
                <Navbar navigation={props.navigation} />
                <Row size={81}>
                  <Grid style={style.container}>
                    <Row size={10}>
                      <BuildingList
                          user={signupReducer.user}
                          buildings={randArr(buildingReducer.buildingList)}
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

const randArr = (buildingArr) => {
  let numEl = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
  const newArr = [];
  while (numEl) {
      newArr.push(buildingArr[Math.floor(Math.random() * buildingArr.length)]);
      numEl--;
  }
  return newArr.filter((e, i) => newArr.indexOf(e) == i);
};