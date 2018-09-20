import React from 'react';
import { Col } from 'react-native-easy-grid';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../theme/styles/StartScreen.style';
import font from '../../theme/styles/Typography.style';

const SignUpBtn = ({ navigation }) => (
    <React.Fragment>
            <TouchableOpacity activeOpacity={1}
                onPress={() => navigation.navigate('CreateAccount')}
                style={[styles.largeButton, {height: 50}]}
            >
                <Text style={[styles.whiteText, font.btnText]}>Sign Up</Text>
            </TouchableOpacity>
    </React.Fragment>
);

export default SignUpBtn;
