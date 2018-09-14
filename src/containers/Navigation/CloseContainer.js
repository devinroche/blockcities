import React from 'react';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import RightBtn from '../../components/Nav/RightBtn';
import BackBtn from '../../components/Nav/Back';
import CenterBtn from '../../components/Nav/CenterBtn';
import light from '../../theme/styles/Navbar.light.style';
import dark from '../../theme/styles/Navbar.dark.style';
import { toggleSearch } from '../../redux/search/actions';

const CloseContainer = (props) => {
    const styles = light

    return (
        <Row size={8} style={[styles.topRow]}>
            <Grid style={[styles.grid, { justifyContent: 'space-between' }]}>
                <Col style={{paddingLeft: 10}}>
                    <BackBtn {...props} />
                </Col>
                <Col>
                    <CenterBtn {...props} />
                </Col>
                <Col style={{paddingRight: 10}}>
                    {/* <RightBtn {...props} /> */}
                </Col>
            </Grid>
        </Row>
    );
};

const mapDispatchToProps = {
    toggleSearch,
};

export default connect(null, mapDispatchToProps)(CloseContainer);
