import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../theme/styles/Login.style';
// import font from '../../theme/styles/Typography.style';

const LoginInBtn = ({ navigation }) => (
    <React.Fragment>
        <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.largeButton}
        >
            <Text style={styles.whiteText}>Sign In</Text>
        </TouchableOpacity>
    </React.Fragment>
);

export default LoginInBtn;
