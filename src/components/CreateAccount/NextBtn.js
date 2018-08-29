import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../theme/styles/CreateAccount.style';
import font from '../../theme/styles/Typography.style';

const NextBtn = ({ navigation }) => (

    <TouchableOpacity
        onPress={() => navigation.navigate('CreateAccountNext')}
        style={styles.smallButton}
    >
        <Text style={styles.whiteText}>Next</Text>
    </TouchableOpacity>

);

export default NextBtn;
