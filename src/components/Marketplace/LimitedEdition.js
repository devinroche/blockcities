import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import img from '../../../assets/img/market.png';

const LimitedEdition = ({ navigation }) => (
    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('FeaturedPage')}>
        <Image source={img} resizeMode="cover" style={{width: 370, height: 132, borderRadius: 7}}/>
    </TouchableOpacity>
);

export default LimitedEdition;