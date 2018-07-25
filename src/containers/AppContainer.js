import React from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux'
import Navbar from './NavContainer';
import Footer from './FooterContainer';
import Followers from '../components/Followers';
import BuildingList from '../components/BuildingList'

class AppContainer extends React.Component {
    render(){
        return (
            <Grid>
                <Row size={10} style={{paddingTop: 40, paddingBottom: 10}}>
                    <Navbar/>
                </Row>
                <Row size={75} style={{}}>
                    <Col size={5}></Col>
                    <Col size={90}>
                        <Row size={10}>
                            <Followers {...this.props}/>
                        </Row>
                        <Row size={90}>
                            <BuildingList {...this.props}/>
                        </Row>
                    </Col>
                    <Col size={5}></Col>
                </Row>
                <Row size={10}>
                    <Footer/>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = state => (state.reducer)

export default connect(mapStateToProps)(AppContainer)

const styles = StyleSheet.create({
    container: {
      flex: 4,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  const border = {
      borderWidth: 1
  }