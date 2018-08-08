import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../theme/styles/CreateAccount.style';
// import font from '../../theme/styles/Typography.style';

const CreateAccountBtn = (values) => (
    <TouchableOpacity
        // onPress={() => navigation.navigate('Home')}
        onPress={(values) => console.log(values)}
        style={styles.largeButton}
    >
        <Text style={styles.loginText}>Create Account</Text>
    </TouchableOpacity>
);

export default CreateAccountBtn;
