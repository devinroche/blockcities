import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import img from '../../utils/market.png'

const LimitedEdition = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('FeaturedPage')}>
            <Image source={img} resizeMode="stretch" style={{width: 360, height: 140}}/>
        </TouchableOpacity>
    );
};

export default LimitedEdition;
