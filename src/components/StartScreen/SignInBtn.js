import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Col } from 'react-native-easy-grid';
import styles from '../../theme/styles/StartScreen.style';
import font from '../../theme/styles/Typography.style';

const SignInBtn = ({ navigation }) => (
        <TouchableOpacity activeOpacity={1}
            onPress={() => navigation.navigate('Login')}
            style={styles.clearButton}
        >
            <Text style={[styles.darkText, font.btnTextDark]}>Sign In</Text>
        </TouchableOpacity>
);

export default SignInBtn;
