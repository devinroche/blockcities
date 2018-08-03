import React from 'react';
import { Col, Grid, Row } from 'react-native-easy-grid';
import RightBtn from '../components/Nav/RightBtn';
import LeftBtn from '../components/Nav/LeftBtn';
import CenterBtn from '../components/Nav/CenterBtn';
import light from '../theme/Navbar.light.style';
import dark from '../theme/Navbar.dark.style';

const Navbar = (props) => {
    const { darkMode } = props;
    const styles = darkMode ? dark : light;

    return (
        <Row size={10} style={styles.topRow}>
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
        </Row>
    );
};

export default Navbar;
