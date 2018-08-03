import React from 'react';
import { Row, Grid, Col } from 'react-native-easy-grid';
import { Text, Image, View, Switch, TextInput, TouchableOpacity } from 'react-native';
import styles from '../theme/styles/Followers.style';
import font from '../theme/styles/Typography.style';
import avatar from '../utils/avataaars.png';

const style = {
    container: {
        alignItems: 'center',
    },
    img: {
        width: 80, height: 80,
    },
    text: {
        paddingTop: 10, color: '#1e3799', fontWeight: 'bold',
    },
};

const Settings = (profile) => {
    return (
        <Grid style={styles.container}>
            <Row size={1}>
                <Image
                    style={style.img}
                    source={avatar}
                />
            </Row>
            <Row size={.5}>
                <Text style={font.bold}>@{profile.user.username}</Text>
            </Row>
            <Row size={.5}>
                <Text style={font.normal}>{profile.user.name}</Text>
            </Row>
            <Line />
            <Row size={1} style={{paddingBottom: 20}}>
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
            <Row size={1}>
                <Grid>
                    <Row size={.75}>
                        <Text style={font.strong}>Update Email</Text>
                    </Row>
                    <Row size={1}>
                        <TextInput
                            style={{height: 45, backgroundColor: '#F2F2F2', borderRadius: 35, width: '100%', padding: 15}}
                            onChangeText={(text) => console.log(text)}
                            placeholder={'you@email.com'}
                            value={''}
                        />
                    </Row>
                    <Row size={.5} style={[styles.container, {marginTop: 10}]}>
                        <Col>
                            <Text style={font.info}>Verify your new email.</Text>
                        </Col>
                        <Col>
                            <TouchableOpacity
                                onPress={() => console.log('fart')}
                                style={{ backgroundColor: '#4D92FF', borderRadius: 20, alignItems: 'center', padding: 6}}
                            >
                                <Text style={font.light}>Send Verification Email</Text>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                </Grid>
            </Row>
            <Row size={1}/>
            <Row size={.5}>
                <TouchableOpacity
                    onPress={() => console.log('fart')}
                    style={{ backgroundColor: '#EB5757', borderRadius: 20, alignItems: 'center', justifyContent: 'center',  width: 100, height: 35}}
                >
                    <Text style={font.light}>Logout</Text>
                </TouchableOpacity>
            </Row>
        </Grid>
    );
};

export default Settings;

const Line = () => <View style={styles.line} />;