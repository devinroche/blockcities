import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const LeftBtn = ({ navigation }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Icon name="magnifier" size={20} color="#30C2FF" />
    </TouchableOpacity>
);

export default LeftBtn;
