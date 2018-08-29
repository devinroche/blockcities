import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import img from '../../../assets/img/market.png';

const LimitedEdition = ({ navigation }) => (
    <TouchableOpacity onPress={() => navigation.navigate('FeaturedPage')}>
        <Image source={img} resizeMode="stretch" style={{width: 368, height: 132, borderRadius: 7}}/>
    </TouchableOpacity>
);

export default LimitedEdition;
// style={{ width: 380, height: 140 }}