import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import searchIcon from '../../../assets/img/search.png';
import Search from '../SVGS/Search'

const LeftBtn = ({ navigation, toggleSearch, profile}) => {
    return (
        <TouchableOpacity onPress={() => {
            toggleSearch();
            profile ? null : navigation.navigate('Marketplace');
        }}
        >
            <Search />
        </TouchableOpacity>
    );
};

export default LeftBtn;
