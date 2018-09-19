import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {View} from 'react-native'
import { connect } from 'react-redux';
import BackContainer from './Navigation/BackContainer';
import Footer from './Navigation/FooterContainer';
import styles from '../theme/styles/Profile.style';
import FeaturedCollection from '../components/Marketplace/FeaturedCollection/FeaturedCollection';
import {toggleHeaderColor, currentBuilding} from '../redux/building/actions';

const FeaturedContainer = props => {
  return (
    <Grid style={styles.grid}>
        {props.isGrey ? <BackContainer navigation={props.navigation} is_logo isGrey/> :<BackContainer navigation={props.navigation} is_logo/>}
        <Row size={90}>
            <Col size={100}>
                <Row size={94}>
                    <FeaturedCollection {...props}/>
                </Row>
            </Col>
        </Row>
        {/* <Footer navigation={props.navigation} /> */}
    </Grid>
  )
};

const mapStateToProps = state => (
    state.buildingReducer
);

const mapDispatchToProps = {
  toggleHeaderColor,
  currentBuilding,
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedContainer);
