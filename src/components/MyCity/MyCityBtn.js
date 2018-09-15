import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../theme/styles/CreateAccount.style';
import font from '../../theme/styles/Typography.style';

const MyCityBtn = ({ submit }) => (
    <TouchableOpacity
        // onPress={} handle the my cities button on the homepage
        style={styles.headerBtnDark}
    >
        <Text style={[styles.loginText, font.btnText, { fontSize: 12 }]}>My City</Text>
    </TouchableOpacity>
);

export default MyCityBtn;
