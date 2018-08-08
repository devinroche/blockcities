import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';
import {
    Text, Image,
} from 'react-native';
import styles from '../../theme/styles/StartScreen.style';
import startImage from '../../utils/start-image.png';
import font from '../../theme/styles/Typography.style';
import SignUpBtn from './SignUpBtn';
import SignInBtn from './SignInBtn';


const Start = (props) => {
    const { navigation } = props;
    return (
        <Grid style={styles.container}>
            <Row size={1.5}>
                <Image
                    style={styles.img}
                    source={startImage}
                />
            </Row>
            <Row size={0.3} />
            <Row size={0.5}>
                <Text style={font.xlarge}>Block Cities</Text>
            </Row>
            <Row size={0.7} />
            <Row size={0.5}>
                <SignUpBtn
                    navigation={navigation}
                />
            </Row>
            <Row size={0.5}>
                <SignInBtn
                    navigation={navigation}
                />
            </Row>
        </Grid>
    );
};

export default Start;
