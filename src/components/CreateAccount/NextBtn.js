import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../theme/styles/CreateAccount.style';
// import font from '../../theme/styles/Typography.style';

const NextBtn = ({ navigation }) => (
    <React.Fragment>
        <TouchableOpacity
            onPress={() => navigation.navigate('CreateAccountNext')}
            style={styles.smallButton}
        >
            <Text style={styles.whiteText}>Next</Text>
        </TouchableOpacity>
    </React.Fragment>
);

export default NextBtn;
