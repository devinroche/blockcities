import React from 'react';
import {View} from 'react-native'
import { Col, Grid, Row } from 'react-native-easy-grid';
import RightBtn from '../components/Nav/RightBtn';
import LeftBtn from '../components/Nav/LeftBtn';
import CenterBtn from '../components/Nav/CenterBtn';
import light from '../theme/styles/Navbar.light.style';
import dark from '../theme/styles/Navbar.dark.style';

const Navbar = (props) => {
    const { darkMode } = props;
    const styles = darkMode ? dark : light;

    return (
        <Row size={8} style={[styles.topRow]}>
            <Grid style={[styles.grid, {justifyContent: 'space-between'}]}>
                <Col>
                    <LeftBtn {...props} />
                </Col>
                <Col>
                    <CenterBtn {...props} />
                </Col>
                <Col>
                    <RightBtn {...props} />
                </Col>
            </Grid>
        </Row>
    );
};

export default Navbar;
