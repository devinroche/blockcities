import React from 'react';
import { Row, Grid, Col } from 'react-native-easy-grid';
import { Text, Switch } from 'react-native';
import styles from '../../theme/styles/Settings.style';
import font from '../../theme/styles/Typography.style';

const PushNotification = () => (
    <Row size={1.5} style={styles.pillContainer}>
        <Grid>
            <Row>
                <Col size={2.5}>
                    <Row size={.5}>
                        <Text style={font.strong}>Push Notifications</Text>
                    </Row>
                    <Row size={1}>
                        <Text style={[font.info, {flexWrap: 'wrap'}]}>Enable this setting to get updates and notifications from BlockCities</Text>
                    </Row>
                </Col>
                <Col size={.5}/>
                <Col size={.5} style={[styles.container]}>
                    <Switch style={{alignSelf: 'flex-end'}} />
                </Col>
            </Row>
            {/* <Row size={1}>
                <Text style={font.info}>Enable this setting to get updates and notifications from BlockCities</Text>
            </Row> */}
        </Grid>
    </Row>
);

export default PushNotification;
