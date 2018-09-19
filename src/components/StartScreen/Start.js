import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';
import {
    Text, Image,
} from 'react-native';
import styles from '../../theme/styles/StartScreen.style';
import startImage from '../../../assets/img/start-image.png';
import textLogo from '../../../assets/img/text-logo.png';
import font from '../../theme/styles/Typography.style';
import SignUpBtn from './SignUpBtn';
import SignInBtn from './SignInBtn';


const Start = (props) => {
    const { navigation } = props;
    return (
        <Grid style={styles.container}>
            <Row size={50} style={{justifyContent: 'center'}}>
                <Image
                    style={[styles.img]}
                    source={startImage}
                />
            </Row>
            <Row size={5} />
            <Row size={10} style={{justifyContent: 'center', alignItems: 'center'}} >
                <Image source={textLogo} style={{width: 217, height: 32}}/>
            </Row>
            <Row size={15} />
            <Row size={15} style={{justifyContent: 'center'}}>
                <SignUpBtn
                    navigation={navigation}
                />
            </Row>
            <Row size={15} style={{justifyContent: 'center'}}>
                <SignInBtn
                    navigation={navigation}
                />
            </Row>
        </Grid>
    );
};

export default Start;
