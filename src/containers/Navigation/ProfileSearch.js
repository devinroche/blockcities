import React from 'react';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import RightBtn from '../../components/Nav/RightBtn';
import LeftBtn from '../../components/Nav/LeftBtn';
import CenterBtn from '../../components/Nav/CenterBtn';
import light from '../../theme/styles/Navbar.light.style';
import dark from '../../theme/styles/Navbar.dark.style';
import { toggleProfileSearch } from '../../redux/search/actions';

const ProfileSearch = (props) => {
    const { darkMode, showProfileSearch } = props;
    console.log('fart')
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
                <Col style={{paddingLeft: 10}}>
                    <LeftBtn {...props} />
                </Col>
                <Col>
                { showProfileSearch ? <TextInput
                    style={istyle}
                    textAlign={'center'}
                    onChangeText={text => console.log(text)}
                    value={"test"}
                    placeholder="Search buildings, cities..."
                    clearButtonMode="never"
                    spellCheck={false}
                    autoCorrect={false}
                    autoCapitalize="none"
                /> : <CenterBtn {...props}/> }
                </Col>
                <Col style={{paddingRight: 10}}>
                    <RightBtn {...props} />
                </Col>
            </Grid>
        </Row>
    );
};

const mapDispatchToProps = {
    toggleProfileSearch,
};

const mapStateToProps = state => ({
  showProfileSearch: state.searchReducer.showProfileSearch,
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSearch);
