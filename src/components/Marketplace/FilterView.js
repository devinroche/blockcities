import React from 'react'
import {Text, View, TouchableOpacity, Dimensions} from 'react-native'
import {Grid, Row, Col} from 'react-native-easy-grid';
import fonts from '../../theme/styles/Typography.style'

const FilterView = (props) => {
  return (
    <Grid>
      <Row>
        <Text>City</Text>
      </Row>
      <Row>
        <Col size={3}><Text>NYC</Text></Col>
        <Col size={3}><Text>SF</Text></Col>
        <Col size={3}><Text>ATL</Text></Col>
        <Col size={3}><Text>CHI</Text></Col>
      </Row>
      <Row>
        <Text>Era</Text>
      </Row>
      <Row>
        <Text>All</Text>
      </Row>

      <Row>
        <Text>Color</Text>
      </Row>
      <Row>
        <Text>Colorz</Text>
      </Row>

      <Row>
        <Text>Apply Filters</Text>
      </Row>
    </Grid>
  )
}

export default FilterView;

const styles = {
  buttonStyle : {
    backgroundColor: '#f2f2f2',
    width: Dimensions.get("window").width,
    borderWidth: 1,
    height: Dimensions.get("window").height-180,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems:'center',
    position: 'absolute',
    bottom: -15,
    // left: -2
  },
  buttonTextStyle : {
    color:'red',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 1
  }
}