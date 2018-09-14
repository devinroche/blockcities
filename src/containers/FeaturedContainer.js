import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {View} from 'react-native'
import { connect } from 'react-redux';
import BackContainer from './Navigation/BackContainer';
import Footer from './Navigation/FooterContainer';
import styles from '../theme/styles/Profile.style';
import FeaturedCollection from '../components/Marketplace/FeaturedCollection/FeaturedCollection';
import {toggleHeaderColor} from '../redux/building/actions';

const FeaturedContainer = props => {
  return (
    <Grid style={styles.grid}>
        <Row size={75}>
            <Col size={100}>
                {props.isGrey ? <BackContainer navigation={props.navigation} logo isGrey/> :<BackContainer navigation={props.navigation} logo/>}
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
  toggleHeaderColor
}
export default connect(mapStateToProps, mapDispatchToProps)(FeaturedContainer);
