import React from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux'
import Navbar from './NavContainer';
import Footer from './FooterContainer';
import Followers from '../components/Followers';
import BuildingList from '../components/BuildingList'

class SearchContainer extends React.Component {
    render(){
        return (
            <Grid>
                Hi
            </Grid>
        )
    }
}

const mapStateToProps = state => (state.reducer)

export default connect(mapStateToProps)(SearchContainer)

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