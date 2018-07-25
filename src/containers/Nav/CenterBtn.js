
import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'


export default class CenterBtn extends React.Component {
    render(){
        return (
            <View style={{alignItems: 'center'}}>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('../../utils/avataaars.png')} 
                />
                <Text style={{paddingTop: 10}}>Devin Roche</Text>
            </View>
        )
    }
}
  