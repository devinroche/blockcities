import React from 'react';
import { Col, Grid, Row } from 'react-native-easy-grid';
import connect from 'react-redux'
import RightBtn from './RightBtn'
import CenterSearch from './Center';
import LeftBtn from './LeftBtn'
import light from '../../../theme/styles/Navbar.light.style';
import dark from '../../../theme/styles/Navbar.dark.style';
import { filteredBuildings, toggleSearch } from '../../../redux/search/actions';

const SearchHeaderNav = (props) => {
    const styles = dark

    return (
        <Row size={100} style={[styles.topRow]}>
            <Grid style={[styles.grid, { justifyContent: 'space-between' }]}>
                <Col style={{paddingLeft: 10}}>
                    <LeftBtn {...props} />
                </Col>
                <Col size={90}>
                    <CenterSearch {...props} />
                </Col>
                <Col style={{paddingRight: 10}}>
                    <RightBtn {...props} />
                </Col>
            </Grid>
        </Row>
    );
};

const mapDispatchToProps = {
    toggleSearch,
    filteredBuildings,
};

export default SearchHeaderNav;
