import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../theme/styles/Login.style';
// import font from '../../theme/styles/Typography.style';

const NoAccountBtn = ({ navigation }) => (
    <React.Fragment>
        <TouchableOpacity
            onPress={() => navigation.navigate('CreateAccount')}
            style={styles.clearButton}
        >
            <Text style={styles.darkText}>No Account? Sign Up</Text>
        </TouchableOpacity>
    </React.Fragment>
);

export default NoAccountBtn;
