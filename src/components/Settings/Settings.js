import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';
import {
    Text, Image, View,
} from 'react-native';
import styles from '../../theme/styles/Settings.style';
import font from '../../theme/styles/Typography.style';
import avatar from '../../utils/avataaars.png';
import PushNotification from './PushNotification';
import UpdateEmail from './UpdateEmail';
import LogoutBtn from './LogoutBtn';

const Settings = profile => (
    <Grid style={styles.container}>
        <Row size={1.5}>
            <Image
                style={styles.img}
                source={avatar}
            />
        </Row>
        <Row size={0.5}>
            <Text style={font.bold}>@{profile.user.username}</Text>
        </Row>
        <Row size={0.5}>
            <Text style={font.normal}>{profile.user.name}</Text>
        </Row>
        <Line />
        <PushNotification />
        <UpdateEmail />
        <LogoutBtn />
    </Grid>
);

export default Settings;

const Line = () => <View style={styles.line} />;