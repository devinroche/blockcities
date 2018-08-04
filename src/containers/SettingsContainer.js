import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import BackContainer from './BackContainer';
import Footer from './FooterContainer';
import styles from '../theme/styles/Containers.style';
import Settings from '../components/Settings/Settings';

const SettingsContainer = (props) => {
    const { navigation, profile } = props;
    return (
        <Grid style={styles.grid}>
            <BackContainer navigation={navigation} />
            <Row size={75}>
                <Col size={5} />
                <Col size={90}>
                    <Settings {...profile} />
                </Col>
                <Col size={5} />
            </Row>
            <Footer navigation={navigation} />
        </Grid>
    );
};

const mapStateToProps = state => (state.reducer);

export default connect(mapStateToProps)(SettingsContainer);
