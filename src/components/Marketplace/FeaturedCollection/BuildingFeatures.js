import React from 'react';
import { Row, Col } from 'react-native-easy-grid';
import { Text, View } from 'react-native';
import font from '../../../theme/styles/Typography.style';

const BuildingFeatures = () => (
    <View style={{
        width: '75%', flex: 1, justifyContent: 'center', alignSelf: 'center', paddingBottom: 30
    }}
    >
        {
            features.map((el, idx) => (
                <Row key={idx} style={{ paddingVertical: 20 }}>
                    <Col size={25}>
                        <View style={{
                            width: 45,
                            height: 45,
                            paddingHorizontal: 10,
                            borderRadius: 50,
                            backgroundColor: '#c4c4c4',
                        }}
                        />
                    </Col>
                    <Col size={75}>
                        <Row>
                            <Text style={[font.featurePrice, { color: '#231f20', fontSize: 16 }]}>{el.name}</Text>
                        </Row>
                        <Row>
                            <Text style={[font.info, { fontSize: 13 }]}>{el.type}</Text>
                        </Row>
                    </Col>
                </Row>
            ))
        }
    </View>
);

export default BuildingFeatures;

const features = [
    {
        type: 'Roof Type',
        name: '3x Constructable Bases',
    },
    {
        type: 'Base Type',
        name: '3x Constructable Bases',
    },
    {
        type: 'Window Type',
        name: 'Glass Curtain',
    },
    {
        type: 'Window Color',
        name: 'True Blue',
    },
    {
        type: 'Architectural Style',
        name: 'Post-Modern/Modern',
    },
    {
        type: 'High-Rise',
        name: 'Height',
    },
];
