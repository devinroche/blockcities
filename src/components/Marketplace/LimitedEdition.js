import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import img from '../../../assets/img/market.png';

const LimitedEdition = ({ navigation }) => (
    <TouchableOpacity onPress={() => navigation.navigate('FeaturedPage')}>
        <Image source={img} resizeMode="stretch" style={{ width: 360, height: 140 }} />
    </TouchableOpacity>
);

export default LimitedEdition;
