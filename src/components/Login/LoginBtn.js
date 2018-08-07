import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../theme/styles/CreateAccount.style';
// import font from '../../theme/styles/Typography.style';

const LoginBtn = ({ navigation }) => (
    <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.largeButton}
    >
        <Text style={styles.loginText}>Sign In</Text>
    </TouchableOpacity>
);

export default LoginBtn;
