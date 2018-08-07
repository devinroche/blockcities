import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';
import {
    TextInput, Image,
} from 'react-native';
import styles from '../../theme/styles/Login.style';
import loginImage from '../../utils/login-image.png';
// import font from '../../theme/styles/Typography.style';
import LoginBtn from './LoginBtn';
import NoAccountBtn from './NoAccountBtn';


const Login = (props) => {
    const { navigation } = props;
    return (
        <Grid style={styles.container}>
            <Image
                style={styles.img}
                source={loginImage}
            />
            <Row size={0.1} />
            <Row size={0.1}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => console.log(text)}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    placeholder="Username"
                    value=""
                />
            </Row>
            <Row size={0.025} />
            <Row size={0.1}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => console.log(text)}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    value=""
                />
            </Row>
            <Row size={0.025} />
            <LoginBtn
                navigation={navigation}
            />
            <Row size={0.05} />
            <NoAccountBtn
                navigation={navigation}
            />
        </Grid>
    );
};

export default Login;
