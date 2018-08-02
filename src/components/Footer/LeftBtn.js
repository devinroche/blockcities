import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const LeftBtn = ({ navigation }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Marketplace')}>
        <Icon name="notebook" size={20} color="#95a5a6" />
    </TouchableOpacity>
);

export default LeftBtn;
