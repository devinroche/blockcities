import React from 'react';
import { Row, Col, Grid } from 'react-native-easy-grid';
import {
    Text, TextInput, Image,
} from 'react-native';
import styles from '../../theme/styles/CreateAccount.style';
import loginImage from '../../utils/login-image.png';
import CreateAccountBtn from './CreateAccountBtn';
// import font from '../../theme/styles/Typography.style';

const CreateAccountNext = (props) => {
    const { navigation } = props;
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
                <TextInput
                    style={styles.input}
                    onChangeText={text => console.log(text)}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    placeholder="Create Username"
                    value=""
                />
            </Row>
            <Row size={0.12}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => console.log(text)}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    placeholder="Create Password"
                    value=""
                />
            </Row>
            <Row size={0.09}>
                <CreateAccountBtn
                    navigation={navigation}
                />
            </Row>
        </Grid>
    );
};

export default CreateAccountNext;
