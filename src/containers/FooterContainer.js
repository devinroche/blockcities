import React from 'react';
import { Col, Grid } from 'react-native-easy-grid';
import RightBtn from '../components/Footer/RightBtn';
import LeftBtn from '../components/Footer/LeftBtn';
import CenterBtn from '../components/Footer/CenterBtn';

const styles = {
    container: {
        flex: 1,
        alignItems: 'flex-start',
    },
    grid: {
        flex: 1,
        alignItems: 'center',
    },
};

const Footer = props => (
    <Grid style={styles.container}>
        <Col style={styles.grid}>
            <LeftBtn {...props} />
        </Col>
        <Col style={styles.grid}>
            <CenterBtn {...props} />
        </Col>
        <Col style={styles.grid}>
            <RightBtn {...props} />
        </Col>
    </Grid>
);

export default Footer;
