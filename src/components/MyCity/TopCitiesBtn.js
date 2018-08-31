import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../theme/styles/CreateAccount.style';
import font from '../../theme/styles/Typography.style';

const TopCitiesBtn = () => (
    <TouchableOpacity
        // onPress={} handle top cities button click home page
        style={styles.headerBtn}
    >
        <Text style={[styles.darkText, font.btnTextDarkSmall, { fontSize: 12 }]}>Top Cities</Text>
    </TouchableOpacity>
);

export default TopCitiesBtn;
