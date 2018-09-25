import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Col } from 'react-native-easy-grid';
import styles from '../../theme/styles/StartScreen.style';
import font from '../../theme/styles/Typography.style';

const GetStartedBtn = ({ navigation }) => (
  <React.Fragment>
    <TouchableOpacity activeOpacity={1}
        onPress={() => navigation.navigate('Home')}
        style={[styles.largeButton, {height: 50}]}
    >
        <Text style={[styles.whiteText, font.btnText]}>Enter</Text>
    </TouchableOpacity>
  </React.Fragment>
);

export default GetStartedBtn;
