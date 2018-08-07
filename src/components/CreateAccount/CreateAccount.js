import React from 'react';
import { Row, Col, Grid } from 'react-native-easy-grid';
import {
    Text, TextInput, Image,
} from 'react-native';
import styles from '../../theme/styles/CreateAccount.style';
import loginImage from '../../utils/login-image.png';
// import font from '../../theme/styles/Typography.style';
import NextBtn from './NextBtn';

const CreateAccount = (props) => {
    const { navigation } = props;
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
            <Row size={0.12}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => console.log(text)}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    placeholder="Name"
                    value=""
                />
            </Row>
            <Row size={0.12}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => console.log(text)}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    placeholder="Email Address"
                    value=""
                />
            </Row>
        </Grid>
    );
};

export default CreateAccount;
