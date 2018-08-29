import React from 'react';
import { Row } from 'react-native-easy-grid';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../theme/styles/Settings.style';
import font from '../../theme/styles/Typography.style';

const LogoutBtn = () => (
    <React.Fragment>
        <Row size={0.5} />
        <Row size={0.5}>
            <TouchableOpacity
                onPress={() => console.log('fart')}
                style={styles.warningButton}
            >
                <Text style={font.light}>Logout</Text>
            </TouchableOpacity>
        </Row>
        <Row size={0.5} />
    </React.Fragment>
);

export default LogoutBtn;
