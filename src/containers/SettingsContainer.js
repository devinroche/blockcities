import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import BackContainer from './Navigation/BackContainer';
import Footer from './Navigation/FooterContainer';
import styles from '../theme/styles/Containers.style';
import Settings from '../components/Settings/Settings';
import { Transition } from 'react-navigation-fluid-transitions';

const SettingsContainer = (props) => {
    const { navigation, signupReducer } = props;
    const { user } = signupReducer;
    return (
        // <Transition appear={'right'}>
            <Grid style={styles.grid}>
                <BackContainer navigation={navigation} />
                <Row size={75}>
                    <Col size={10} />
                    <Col size={80}>
                        <Settings {...user} />
                    </Col>
                    <Col size={10} />
                </Row>
                <Footer navigation={navigation} />
            </Grid>
        // </Transition>
    );
};
const mapStateToProps = state => ({
    signupReducer: state.signupReducer,
});

export default connect(mapStateToProps)(SettingsContainer);
