import React from 'react';
import { Col, Grid, Row } from 'react-native-easy-grid';
import RightBtn from '../components/Footer/RightBtn';
import LeftBtn from '../components/Footer/LeftBtn';
import CenterBtn from '../components/Footer/CenterBtn';
import light from '../theme/styles/Footer.light.style';
import dark from '../theme/styles/Footer.dark.style';

const Footer = (props) => {
    const { darkMode } = props;
    const styles = darkMode ? dark : light;

    return (
        <Row size={6} style={styles.bottomRow}>
            <Grid style={styles.container}>
                <Col style={styles.grid}>
                    <LeftBtn {...props} darkMode={darkMode} />
                </Col>
                <Col style={styles.grid}>
                    <CenterBtn {...props} darkMode={darkMode} />
                </Col>
                <Col style={styles.grid}>
                    <RightBtn {...props} darkMode={darkMode} />
                </Col>
            </Grid>
        </Row>
    );
};

export default Footer;
