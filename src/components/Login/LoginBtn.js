import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../theme/styles/CreateAccount.style';
import font from '../../theme/styles/Typography.style';

const LoginBtn = ({ submit }) => (
    <TouchableOpacity
        activeOpacity={1}
        onPress={submit}
        style={styles.largeButton}
    >
        <Text style={[styles.loginText, font.btnText]}>Sign In</Text>
    </TouchableOpacity>
);

export default LoginBtn;
