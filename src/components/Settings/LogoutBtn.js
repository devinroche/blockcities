import React from 'react';
import { Row } from 'react-native-easy-grid';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../theme/styles/Settings.style';
import font from '../../theme/styles/Typography.style';

const LogoutBtn = () => (
    <React.Fragment>
        <Row size={1} style={{marginBottom: -35}}>
            <TouchableOpacity activeOpacity={1}
                // onPress={} handles logout btn
                style={[styles.warningButton, {alignSelf: 'flex-end'}]}
            >
                <Text style={font.light}>Logout</Text>
            </TouchableOpacity>
        </Row>
        <Row size={0.5} />
    </React.Fragment>
);

export default LogoutBtn;
