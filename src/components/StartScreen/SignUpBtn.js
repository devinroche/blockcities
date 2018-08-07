import React from 'react';
import { Col } from 'react-native-easy-grid';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../theme/styles/StartScreen.style';
// import font from '../../theme/styles/Typography.style';

const SignUpBtn = ({ navigation }) => (
    <React.Fragment>
        <Col size={0.1} />
        <Col size={1.5}>
            <TouchableOpacity
                onPress={() => navigation.navigate('CreateAccount')}
                style={styles.largeButton}
            >
                <Text style={styles.whiteText}>Sign Up</Text>
            </TouchableOpacity>
        </Col>
    </React.Fragment>
);

export default SignUpBtn;
