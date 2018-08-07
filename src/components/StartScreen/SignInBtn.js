import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../theme/styles/StartScreen.style';
// import font from '../../theme/styles/Typography.style';

const SignInBtn = ({ navigation }) => (

    <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.clearButton}
    >
        <Text style={styles.darkText}>Sign In</Text>
    </TouchableOpacity>

);

export default SignInBtn;
