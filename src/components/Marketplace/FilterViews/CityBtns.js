import React from 'react'
import {Text, View, TouchableOpacity, Dimensions} from 'react-native'
import {Grid, Row, Col} from 'react-native-easy-grid';
import fonts from '../../../theme/styles/Typography.style'

const CityBtns = (props) => {
  return (
    <Row size={2} style={{justifyContent: 'center'}}>
      <Col size={1} />
    {cities.map(el => {
      let isSelected = false
      if (el.value === props.selectedCity)
        isSelected = true
      return (
        <Col size={2.5} style={{justifyContent: 'center', alignContent: 'center', height: 60}}>
            <TouchableOpacity activeOpacity={1} style={[styles.buttonStyle, isSelected && styles.selectedBorder]} onPress={() => props.updateCityFilter(el.value)}>
                <Text style={{textAlign: 'center'}}>{el.key}</Text>
            </TouchableOpacity>
        </Col>
      )
    })}
      <Col size={1} />
    </Row>
  )
}

export default CityBtns;

const styles = {
  buttonTextStyle : {
    color:'red',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 1
  },
  selectedBorder: {
    borderWidth: 1,
    borderColor : '#828282'
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D8D8D8',
    padding: 10,
    borderRadius: 2,
    width: '90%',
    height: 40,
  }
}

const cities = [
  {key: 'NYC', value: 'New York'},
  {key: 'SF', value: 'San Francisco'},
  {key: 'ATL', value: 'Atlanta'},
  {key: 'CHI', value: 'Chicago'},
]