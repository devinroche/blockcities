import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux'
import NavigationBar from 'react-native-navbar';
import RightBtn from './Footer/RightBtn'
import LeftBtn from './Footer/LeftBtn'
import CenterBtn from './Footer/CenterBtn'
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

class Footer extends React.Component {
    render(){
        return (
            <Grid style={{ flex: 1, alignItems: 'flex-start', }}>
                <Col style={styles.grid}><LeftBtn/></Col>
                <Col style={styles.grid}><CenterBtn/></Col>
                <Col style={styles.grid}><RightBtn/></Col>
            </Grid>
        );
    }
}

export default Footer