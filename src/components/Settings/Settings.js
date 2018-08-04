import React from 'react';
import { Row, Grid, Col } from 'react-native-easy-grid';
import { Text, Image, View, Switch, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../theme/styles/Settings.style';
import font from '../../theme/styles/Typography.style';
import avatar from '../../utils/avataaars.png';
import PushNotification from './PushNotification';
import UpdateEmail from './UpdateEmail';
import LogoutBtn from './LogoutBtn';

const Settings = (profile) => {
    return (
        <Grid style={styles.container}>
            <Row size={1}>
                <Image
                    style={styles.img}
                    source={avatar}
                />
            </Row>
            <Row size={1}>
                <Text style={font.bold}>@{profile.user.username}</Text>
            </Row>
            <Row size={.5}>
                <Text style={font.normal}>{profile.user.name}</Text>
            </Row>
            <Line />
            <PushNotification />
            <UpdateEmail />
            <Row size={1}/>
            <LogoutBtn />
        </Grid>
    );
};

export default Settings;

const Line = () => <View style={styles.line} />;