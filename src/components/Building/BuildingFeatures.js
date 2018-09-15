import React from 'react';
import { Row, Col } from 'react-native-easy-grid';
import { Text, View } from 'react-native';
import font from '../../theme/styles/Typography.style';

const BuildingFeatures = () => (
    <View style={{
        width: '100%', flex: 1, justifyContent: 'center', alignSelf: 'center', paddingBottom: 30,
    }}
    >
        {
            features.map((el, idx) => (
                <Row key={idx} style={{ paddingVertical: 20 }}>
                    <Col size={25}>
                        <View style={{
                            width: 35,
                            height: 35,
                            paddingHorizontal: 20,
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
        type: 'Modern',
        name: 'Style',
    },
    {
        type: 'Antenna',
        name: 'Roof Type',
    },
    {
        type: 'Octagonal',
        name: 'Body Type',
    },
    {
        type: 'Original',
        name: 'Base Type',
    },
    {
        type: 'Glass Curtain',
        name: 'Window Type',
    },
];
