import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Col } from 'react-native-easy-grid';
import Emoji from 'react-native-emoji';

const Btn = ({ title, unicode }) => (
    <Col size={4}>
        <TouchableOpacity style={style.container} activeOpacity={1}>
            <Text style={style.text}><Emoji name={unicode} /> {title}</Text>
        </TouchableOpacity>
    </Col>
);

export default Btn;

const style = {
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#E0E0E0',
        padding: 8,
        borderRadius: 20,
        width: '90%',
        height: 40,
    },
    text: {
        color: '#333333', fontSize: 11,
    },
};
