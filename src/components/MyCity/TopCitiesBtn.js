import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../theme/styles/CreateAccount.style';
import font from '../../theme/styles/Typography.style';

const TopCitiesBtn = () => (
    <TouchableOpacity
        onPress={console.log('top cities')}
        style={styles.headerBtn}
    >
        <Text style={[styles.darkText, font.btnTextDarkSmall, {fontSize: 11}]}>Top Cities</Text>
    </TouchableOpacity>
);

export default TopCitiesBtn;
