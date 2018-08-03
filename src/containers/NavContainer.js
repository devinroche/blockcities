import React from 'react';
import { Col, Grid } from 'react-native-easy-grid';
import RightBtn from '../components/Nav/RightBtn';
import LeftBtn from '../components/Nav/LeftBtn';
import CenterBtn from '../components/Nav/CenterBtn';

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
    },
    grid: {
        flex: 1,
        alignItems: 'center',
    },
};

const Navbar = props => (
    <Grid style={styles.grid}>
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

export default Navbar;
