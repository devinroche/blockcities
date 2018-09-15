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
import { toggleProfileSearch, updateProfileSearch } from '../../redux/search/actions';

const ProfileSearch = (props) => {
    const { darkMode, showProfileSearch, toggleProfileSearch, updateProfileSearch } = props;
    const styles = darkMode ? dark : light;
    const istyle = {
      padding: 15,
      fontSize: 24,
      width: '100%',
      height: '100%',
  };

    return (
        <Row size={8} style={[styles.topRow]}>
            <Grid style={[styles.grid, { justifyContent: 'space-between' }]}>
                <Col size={10} style={{paddingLeft: 10}}>
                    <LeftBtn {...props} profile toggleSearch={toggleProfileSearch}/>
                </Col>
                <Col size={80}>
                { showProfileSearch ? <TextInput
                    style={istyle}
                    textAlign={'center'}
                    onChangeText={text => updateProfileSearch(text)}
                    value={props.profileSearchStr}
                    placeholder="Search your buildings..."
                    clearButtonMode="never"
                    spellCheck={false}
                    autoCorrect={false}
                    autoCapitalize="none"
                /> : <CenterBtn {...props}/> }
                </Col>
                <Col size={10} style={{paddingRight: 10}}>
                {showProfileSearch? <ClearBtn clearSearch={props.updateProfileSearch} />: <RightBtn {...props} /> }
                </Col>
            </Grid>
        </Row>
    );
};

const mapDispatchToProps = {
    toggleProfileSearch,
    updateProfileSearch
};

const mapStateToProps = state => ({
  showProfileSearch: state.searchReducer.showProfileSearch,
  profileSearchStr: state.searchReducer.profileSearchStr
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSearch);
