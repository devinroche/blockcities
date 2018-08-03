import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const RightBtn = ({ navigation }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Icon name="user" size={20} color="#95a5a6" />
    </TouchableOpacity>
);

export default RightBtn;
