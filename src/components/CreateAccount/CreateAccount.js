import React from 'react';
import { Text, Image} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Row, Col, Grid } from 'react-native-easy-grid';
import styles from '../../theme/styles/CreateAccount.style';
import MyTextInput from '../TextInput';
import loginImage from '../../utils/login-image.png';
import font from '../../theme/styles/Typography.style';
import validate from './validate';
import NextBtn from './NextBtn';

const CreateAccount = (props) => {
    const { navigation, handleSubmit, pristine, reset, submitting } = props;
    return (
        <Grid style={styles.container}>
            <Row size={0.15} />
            <Row size={0.15}>
                <Col size={0.75} style={styles.align}>
                    <Text style={styles.text}>Create Account to Play</Text>
                </Col>
                <Col size={0.20} style={styles.align}>
                    <NextBtn
                        navigation={navigation}
                    />
                </Col>
            </Row>
            <Row size={0.3}>
                <Image
                    style={styles.img}
                    source={loginImage}
                />
            </Row>
            <Row size={0.17}>
                <Field
                    name="name"
                    style={styles.input}
                    component={MyTextInput}
                    type="text"
                    placeholder="Name"
                />
            </Row>
            <Row size={0.17}>
                <Field
                    name="email"
                    style={styles.input}
                    type="email"
                    component={MyTextInput}
                    placeholder="Email Address"
                />
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
})(CreateAccount);
