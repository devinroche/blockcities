import React from 'react'
import {Text, View, TouchableOpacity, Dimensions} from 'react-native'
import {Grid, Row, Col} from 'react-native-easy-grid';
import fonts from '../../theme/styles/Typography.style'
import CityBtns from './FilterViews/CityBtns'
import Color1 from './FilterViews/Color1'
import Color2 from './FilterViews/Color2'

const FilterView = (props) => {
  return (
    <Grid>
      <Row size={.5}/>
      <Row size={.5} style={{justifyContent: 'center'}}>
        <View style={{width: 76, height: 4, backgroundColor: '#BDBDBD', borderRadius: 2}}/>
      </Row>
      <Row size={.75} style={{justifyContent: 'center', alignContent:'flex-end', textAlign: 'center' }}>
        <Text style={[fonts.filterHeaderText, {paddingTop: 15}]}>City</Text>
      </Row>
      <CityBtns updateCityFilter={props.updateCityFilter} selectedCity={props.selectedCity}/>
      <Row size={.75} style={{justifyContent: 'center', alignContent:'flex-end', textAlign: 'center'}}>
        <Text style={[fonts.filterHeaderText, {paddingTop: 5}]}>Era</Text>
      </Row>
      <Row size={1.5} style={{justifyContent: 'center'}}>
        <TouchableOpacity activeOpacity={1} style={{
            width: 80,
            height: 38,
            backgroundColor: '#FFFFFF',
            borderWidth: 2,
            borderColor: '#828282',
            borderRadius: 2,
            justifyContent: 'center',
            alignItems: 'center',
            }}>
        <Text style={fonts.eraBtnText}>all</Text>
        </TouchableOpacity>
      </Row>

      <Row size={.75} style={{justifyContent: 'center', alignContent:'flex-end', textAlign: 'center' }}>
        <Text style={[fonts.filterHeaderText, {paddingTop: 10}]}>Color</Text>
      </Row>
      <Row size={1} style={{justifyContent: 'center'}}>
        <Color1 />
      </Row>
      <Row size={1} style={{justifyContent: 'center'}}>
        <Color2 />
      </Row>

      <Row size={3.5} style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity activeOpacity={1} style={styles.buttonStyle} onPress={() => props.closeModal() }>
          <Text style={fonts.filterBtnText}>APPLY FILTERS</Text>
        </TouchableOpacity>
      </Row>
    </Grid>
  )
}

export default FilterView;

const styles = {
  buttonStyle : {
    backgroundColor: '#4D92FF',
    width: 363,
    height: 38,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems:'center',
  }
}