import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux'
import NavigationBar from 'react-native-navbar';
import RightBtn from './Nav/RightBtn'
import LeftBtn from './Nav/LeftBtn'
import CenterBtn from './Nav/CenterBtn'
import { Col, Row, Grid } from "react-native-easy-grid";

const styles = {
    container: {
        flex: 1,
        alignItems: 'center'
    },
    grid: {
        flex: 1,
        alignItems: 'center'
    }
};

class Navbar extends React.Component {
    render(){
        return (
            <Grid style={{ flex: 1, alignItems: 'center', }}>
                <Col style={styles.grid}><LeftBtn/></Col>
                <Col style={styles.grid}><CenterBtn/></Col>
                <Col style={styles.grid}><RightBtn/></Col>
            </Grid>
        );
    }
}

export default Navbar