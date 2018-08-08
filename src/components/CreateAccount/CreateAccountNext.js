import React from 'react';
import { Row, Col, Grid } from 'react-native-easy-grid';
import {
    Text, Image, TouchableOpacity,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import styles from '../../theme/styles/CreateAccount.style';
import loginImage from '../../utils/login-image.png';
import MyTextInput from '../TextInput';
import CreateAccountBtn from './CreateAccountBtn';
import validate from './validate';
// import font from '../../theme/styles/Typography.style';

const CreateAccountNext = (props) => {
    const { navigation, handleSubmit, pristine, reset, submitting } = props;
    return (
        <Grid style={styles.container}>
            <Row size={0.15} />
            <Row size={0.15}>
                <Col size={0.75} style={styles.center}>
                    <Text style={styles.text}>Create Account to Play</Text>
                </Col>
            </Row>
            <Row size={0.3}>
                <Image
                    style={styles.img}
                    source={loginImage}
                />
            </Row>
            <Row size={0.12}>
                <Field
                    name="username"
                    style={styles.input}
                    placeholder="Create Username"
                    type="text"
                    component={MyTextInput}
                />
            </Row>
            <Row size={0.12}>
                <Field
                    name="password"
                    style={styles.input}
                    placeholder="Create Password"
                    type="password"
                    component={MyTextInput}
                />
            </Row>
            <Row size={0.12}>
                <Field
                    name="password2"
                    style={styles.input}
                    placeholder="Verify Password"
                    type="password"
                    component={MyTextInput}
                />
            </Row>
            <Row size={0.09}>
                <TouchableOpacity onPress={handleSubmit}>
                    <Text>submit</Text>
                </TouchableOpacity>
                {/* <CreateAccountBtn
                    navigation={navigation}
                /> */}
            </Row>
        </Grid>
    );
};

export default reduxForm({
    form: 'signup',
    destroyOnUnmount: false,
    validate,
    touchOnChange: true,
    touchOnBlur: true
})(CreateAccountNext);
