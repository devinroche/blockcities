import React from 'react';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Text } from 'react-native';
import Back from '../../components/Back/Back';
import styles from '../../theme/styles/Navbar.light.style';
import typography from '../../theme/styles/Typography.style';

const BackContainer = props => (
    <Row size={10} style={styles.topRow}>
        <Grid style={styles.grid}>
            <Col size={20}>
                <Back {...props} />
            </Col>
            <Col size={60}>
                <Text style={[typography.pageTitle, {textAlign: 'center'}]}>Settings</Text>
            </Col>
            <Col size={20} />
        </Grid>
    </Row>
);

export default BackContainer;
