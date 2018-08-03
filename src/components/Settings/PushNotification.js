import React from 'react';
import { Row, Grid, Col } from 'react-native-easy-grid';
import { Text, Switch } from 'react-native';
import styles from '../../theme/styles/Settings.style';
import font from '../../theme/styles/Typography.style';

const PushNotification = () => (
    <Row size={1} style={styles.pillContainer}>
        <Grid>
            <Row size={.75}>
                <Col size={1}>
                    <Text style={font.strong}>Push Notifications</Text>
                </Col>
                <Col size={1} style={styles.container}>
                    <Switch />
                </Col>
            </Row>
            <Row size={1}>
                <Text style={font.info}>Enable this setting to get updates and notifications from BlockCities</Text>
            </Row>
        </Grid>
    </Row>
);

export default PushNotification;