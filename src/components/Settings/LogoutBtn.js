import React from 'react';
import { Row } from 'react-native-easy-grid';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../theme/styles/Settings.style';
import font from '../../theme/styles/Typography.style';

const LogoutBtn = () => (
    <Row size={.5}>
        <TouchableOpacity
            onPress={() => console.log('fart')}
            style={styles.warningButton}
        >
            <Text style={font.light}>Logout</Text>
        </TouchableOpacity>
    </Row>
);

export default LogoutBtn;
