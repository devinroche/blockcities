import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';
import { Field, reduxForm } from 'redux-form';
import {
    TextInput, Image,
} from 'react-native';
import MyTextInput from '../TextInput';
import styles from '../../theme/styles/CreateAccount.style';
import loginImage from '../../../assets/img/login-image.png';
import font from '../../theme/styles/Typography.style';
import LoginBtn from './LoginBtn';
import NoAccountBtn from './NoAccountBtn';


const Login = (props) => {
    const { navigation, handleSubmit } = props;
    return (
        <Grid style={styles.container}>
            <Image
                style={styles.img}
                source={loginImage}
            />
            <Row size={0.1} />
            <Row size={0.1}>
                <Field
                    name="username"
                    style={styles.input}
                    component={MyTextInput}
                    type="text"
                    placeholder="Username"
                />
            </Row>
            <Row size={0.05} />
            <Row size={0.1}>
                <Field
                    name="password"
                    style={styles.input}
                    placeholder="Password"
                    type="password"
                    component={MyTextInput}
                />
            </Row>
            <Row size={0.05} />
            <LoginBtn
                submit={handleSubmit}
                navigation={navigation}
            />
            <Row size={0.05} />
            <NoAccountBtn
                navigation={navigation}
            />
        </Grid>
    );
};

export default reduxForm({
    form: 'login',
    destroyOnUnmount: true,
    touchOnChange: true,
    touchOnBlur: true
})(Login);

