import React from 'react';
import {TextInput} from 'react-native'
import { Col, Grid, Row } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import RightBtn from '../../components/Nav/RightBtn';
import ClearBtn from '../../components/Nav/Clear';
import LeftBtn from '../../components/Nav/LeftBtn';
import CenterBtn from '../../components/Nav/CenterBtn';
import light from '../../theme/styles/Navbar.light.style';
import dark from '../../theme/styles/Navbar.dark.style';
import { toggleSearch, updateMarketSearch, updateCityFilter} from '../../redux/search/actions';

const MarketSearch = (props) => {
    const { darkMode, showSearch, toggleSearch, updateMarketSearch } = props;
    const styles = darkMode ? dark : light;
    const istyle = {
      padding: 15,
      fontSize: 24,
      width: '100%',
      height: '100%',
  };

  const clearSearch = () => {
    props.updateCityFilter('')
    props.updateMarketSearch('')
  }

    return (
        <Row size={8} style={[styles.topRow]}>
            <Grid style={[styles.grid, { justifyContent: 'space-between' }]}>
                <Col size={10} style={{paddingLeft: 10}}>
                    <LeftBtn {...props} toggleSearch={toggleSearch}/>
                </Col>
                <Col size={80}>
                { props.isSearch ? <TextInput
                    style={istyle}
                    textAlign={'center'}
                    onChangeText={text => updateMarketSearch(text)}
                    value={props.marketSearchStr}
                    placeholder="Search your buildings..."
                    clearButtonMode="never"
                    spellCheck={false}
                    autoCorrect={false}
                    autoCapitalize="none"
                /> : <CenterBtn {...props} /> }
                </Col>
                <Col size={10} style={{paddingRight: 10, alignItems: 'flex-end'}}>
                  {props.isSearch ? <ClearBtn clearSearch={clearSearch} />: <RightBtn {...props} /> }
                </Col>
            </Grid>
        </Row>
    );
};

const mapDispatchToProps = {
    toggleSearch,
    updateMarketSearch,
    updateCityFilter
};

const mapStateToProps = state => {
  return {
    showSearch: state.searchReducer.showSearch,
    marketSearchStr: state.searchReducer.marketSearchStr
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketSearch);
