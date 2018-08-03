import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const RightBtn = ({ navigation }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Icon name="options" size={20} color="#30C2FF" />
    </TouchableOpacity>
);

export default RightBtn;
