import React from 'react';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import RightBtn from '../../components/Nav/RightBtn';
import LeftBtn from '../../components/Nav/LeftBtn';
import CenterBtn from '../../components/Nav/CenterBtn';
import light from '../../theme/styles/Navbar.light.style';
import dark from '../../theme/styles/Navbar.dark.style';
import { toggleSearch } from '../../redux/search/actions';

const Navbar = (props) => {
    const { darkMode, toggleSearch } = props;
    const styles = darkMode ? dark : light;

    return (
        <Row size={8} style={[styles.topRow]}>
            <Grid style={[styles.grid, { justifyContent: 'space-between' }]}>
                <Col style={{paddingLeft: 10}}>
                    <LeftBtn {...props} toggleSearch={toggleSearch}/>
                </Col>
                <Col>
                    <CenterBtn {...props} />
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
};

export default connect(null, mapDispatchToProps)(Navbar);
