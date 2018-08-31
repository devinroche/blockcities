import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import BackContainer from './Navigation/BackContainer';
import Footer from './Navigation/FooterContainer';
import styles from '../theme/styles/Containers.style';
import Settings from '../components/Settings/Settings';

const SettingsContainer = (props) => {
    const { navigation, signupReducer } = props;
    const { user } = signupReducer;

    return (
        <Grid style={styles.grid}>
            <BackContainer navigation={navigation} />
            <Row size={75}>
                <Col size={5} />
                <Col size={90}>
                    <Settings {...user} />
                </Col>
                <Col size={5} />
            </Row>
            <Footer navigation={navigation} />
        </Grid>
    );
};
const mapStateToProps = state => ({
    signupReducer: state.signupReducer,
});

export default connect(mapStateToProps)(SettingsContainer);
