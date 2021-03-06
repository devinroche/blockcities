import React from 'react'
import {Text, View, TouchableOpacity, Dimensions} from 'react-native'
import {Grid, Row, Col} from 'react-native-easy-grid';
import fonts from '../../../theme/styles/Typography.style'

const Color1 = (props) => {
  return (
    <Row size={2} style={{justifyContent: 'center'}}>
      <Col size={1} />
    {colors.map(el => {
      return (
        <Col size={1} style={{justifyContent: 'center', alignContent: 'center', height: 60}}>
            <TouchableOpacity activeOpacity={1} style={styles.buttonStyle}>
                <View style={{
                  backgroundColor: `#${el}`,
                  width: 25,
                  height: 25,
                  borderRadius: 50,
                }}/>
            </TouchableOpacity>
        </Col>
      )
    })}
      <Col size={1} />
    </Row>
  )
}

export default Color1;

const styles = {
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#D8D8D8',
    padding: 10,
    // borderRadius: 2,
    // width: '90%',
    // height: 40,
  }
}

const colors = ["EEAE91", "FFEDC1", "B9DBF0", "B1CAFB", "333333", "4F4F4F"]