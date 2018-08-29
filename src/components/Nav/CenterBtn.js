import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import avatar from '../../../assets/img/avataaars.png';

const style = {
    container: {
        alignItems: 'center',
    },
    img: {
        width: 50, height: 50,
    },
    text: {
        paddingTop: 10, color: '#1e3799', fontWeight: 'bold',
    },
};
const CenterBtn = ({ navigation, user }) => (
    <TouchableOpacity style={style.container} onPress={() => navigation.navigate('Profile')}>
        <Image
            style={style.img}
            source={avatar}
        />
    </TouchableOpacity>
);

export default CenterBtn;
