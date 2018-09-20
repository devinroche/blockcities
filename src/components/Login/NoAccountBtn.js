import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../theme/styles/CreateAccount.style';
import font from '../../theme/styles/Typography.style';

const NoAccountBtn = ({ navigation }) => (

    <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate('CreateAccount')}
        style={styles.clearButton}
    >
        <Text style={[styles.darkText, font.btnTextDarkSmall]}>No Account? Sign Up</Text>
    </TouchableOpacity>

);

export default NoAccountBtn;
