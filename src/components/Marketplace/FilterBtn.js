import React from 'react'
import {Text, TouchableOpacity, Dimensions} from 'react-native'
import fonts from '../../theme/styles/Typography.style'

const FilterBtn = (props) => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={fonts.filterBtnText}>FILTER</Text>
    </TouchableOpacity>
  )
}

export default FilterBtn;

const styles = {
  buttonStyle : {
    backgroundColor: '#4D92FF',
    width: 130,
    height: 38,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems:'center',
    position: 'absolute',
    bottom: 10,
    left: ((Dimensions.get("window").width/2)-75),
  },
  buttonTextStyle : {
    color:'red',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 1
  }
}