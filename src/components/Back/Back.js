import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import theme from '../../theme/theme';

const Back = ({ navigation }) => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={15} color={theme.DARK_BLUE} />
    </TouchableOpacity>
);

export default Back;
