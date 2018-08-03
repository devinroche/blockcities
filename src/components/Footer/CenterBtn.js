import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const CenterBtn = ({ navigation }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="layers" size={20} color="#95a5a6" />
    </TouchableOpacity>
);

export default CenterBtn;
