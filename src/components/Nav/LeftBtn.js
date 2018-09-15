import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import searchIcon from '../../../assets/img/search.png';

const LeftBtn = ({ navigation, toggleSearch, profile}) => {
    return (
        <TouchableOpacity onPress={() => {
            toggleSearch();
            profile ? null : navigation.navigate('Marketplace');
        }}
        >
            <Image source={searchIcon} />
        </TouchableOpacity>
    );
};

export default LeftBtn;
