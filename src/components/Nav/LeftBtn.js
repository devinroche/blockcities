import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import searchIcon from '../../utils/search.png';

const LeftBtn = ({ navigation, toggleSearch }) => {
    console.log(toggleSearch)
    return (
        <TouchableOpacity onPress={() => {
            toggleSearch()
            navigation.navigate('Marketplace')
        }}>
            <Image source={searchIcon}/>
        </TouchableOpacity>
    );
};

export default LeftBtn;
