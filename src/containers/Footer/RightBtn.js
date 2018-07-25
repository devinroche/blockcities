import React from 'react'
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class RightBtn extends React.Component {
    render(){
        return (
            <View>
                <Icon name="user" size={20} color="#95a5a6" />
            </View>
        )
    }
}