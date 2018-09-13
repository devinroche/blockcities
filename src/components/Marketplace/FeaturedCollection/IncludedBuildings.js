import React from 'react';
import { Row } from 'react-native-easy-grid';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import font from '../../../theme/styles/Typography.style';
import term_100 from '../../../../assets/img/term_100.png';
import term_10 from '../../../../assets/img/term_10.png';
import term_200 from '../../../../assets/img/term_200.png';

//updateBuilding(el)
const IncludedBuildings = () => (
    includedBuildingsData.map((el, i) => (
        <TouchableOpacity key={i}>
            <Row size={1} style={{ justifyContent: 'center' }}>
                <Image source={el.img} resizeMode="contain" style={{ width: 360, height: 480 }} />
            </Row>
            <Row size={1} style={{ justifyContent: 'center' }}>
                <Text style={font.title}>{el.name}</Text>
            </Row>
            <Row size={1} style={{ justifyContent: 'center', paddingBottom: 20 }}>
                <Text style={font.featurePrice}>{el.details}</Text>
            </Row>
        </TouchableOpacity>
    ))
);

export default IncludedBuildings;

const includedBuildingsData = [
    {
        name: 'Terminus 100',
        img: term_100,
        details: 'Era 0 - Atlanta - Instant Build',
    },
    {
        name: '10 Terminus',
        img: term_10,
        details: 'Era 0 - Atlanta - Instant Build',
    },
    {
        name: 'Terminus 200',
        img: term_200,
        details: 'Era 0 - Atlanta - Instant Build',
    },
];
