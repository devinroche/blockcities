import React from 'react';
import { Col, Grid, Row } from 'react-native-easy-grid';
import {Text} from 'react-native'
import {connect} from 'react-redux'
import { InstantSearch } from 'react-instantsearch-native';
import RightBtn from '../components/Nav/RightBtn';
import LeftBtn from '../components/Nav/LeftBtn';
import styles from '../theme/styles/Navbar.light.style'
import SearchBox from  '../components/SearchBar'
import Hits from './results'
import {filteredBuildings} from '../redux/search/actions'

const SearchContainer = (props) => {
    return (
        <Row size={8} style={[styles.topRow]}>
            <Grid style={[styles.grid, {justifyContent: 'space-between'}]}>
                <Col>
                    <LeftBtn {...props} />
                </Col>
                <Col>
                    {/* <InstantSearch
                        appId="PKUDPP7ZVE"
                        apiKey="1b51333cef087f8a88bff30a1200d183"
                        indexName="test_blockcities"
                        > */}
                        <SearchBox />
                        {/* <Hits updateHits={props.filteredBuildings}/>
                    </InstantSearch> */}
                </Col>
                <Col>
                    <RightBtn {...props} />
                </Col>
            </Grid>
        </Row>
    );
};

const mapDispatchToProps = {
    filteredBuildings
}

export default connect(null, mapDispatchToProps)(SearchContainer)
