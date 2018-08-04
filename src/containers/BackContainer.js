import React from 'react';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Text } from 'react-native';
import Back from '../components/Back/Back';
import styles from '../theme/styles/Navbar.light.style';
import typography from '../theme/styles/Typography.style';

const BackContainer = (props) => {
    return (
        <Row size={15} style={styles.topRow}>
            <Grid style={styles.grid}>
                <Col style={styles.grid}>
                    <Back {...props} />
                </Col>
                <Col style={styles.grid}>
                    <Text style={typography.title}>Settings</Text>
                </Col>
                <Col style={styles.grid} />
            </Grid>
        </Row>
    );
};

export default BackContainer;
