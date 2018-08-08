import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import Navbar from './NavContainer';
import Footer from './FooterContainer';
import styles from '../theme/styles/Containers.style';
import Marketplace from '../components/Marketplace';

const MarketplaceContainer = (props) => {
    const { navigation } = props;
    return (
        <Grid style={styles.grid}>
            <Navbar navigation={navigation} />
            <Row size={75}>
                <Col size={5} />
                <Col size={90}>
                    <Marketplace />
                </Col>
                <Col size={5} />
            </Row>
            <Footer navigation={navigation} />
        </Grid>
    );
};

const mapStateToProps = state => (state.profileReducer);

export default connect(mapStateToProps)(MarketplaceContainer);
