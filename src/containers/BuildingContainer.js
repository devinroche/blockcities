import React from 'react';
import {StyleSheet, Text} from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import Modal from 'react-native-modalbox';
import styles from '../theme/styles/Profile.style';
import BuildingPage from '../components/Building/BuildingPage';
import CloseContainer from './Navigation/CloseContainer';
import {showBuildingImg} from '../redux/building/actions'
import BuildingModal from '../components/Building/BuildingModal'

class BuildingContainer extends React.Component {
    constructor(props){
      super(props)
      this.state = {}
    }
    
    render(){

      return (
        <Grid style={styles.grid}>
          <Row size={75}>
              <Col size={5} />
              <Col size={90}>
                  <CloseContainer navigation={this.props.navigation} is_logo/>
                  <Row size={94}>
                      <BuildingPage navigation={this.props.navigation} item={this.props.currentBuilding} clickHandler={this.props.showBuildingImg}/>
                  </Row>
              </Col>
              <Col size={5} />
          </Row>
          <Modal isOpen={this.props.buildingModal} style={stylez(this.props.currentBuilding.Color).modal} onClosed={this.props.showBuildingImg} backdrop={false} swipeToClose={true} position={"bottom"} ref={"modal2"}>
              <BuildingModal current={this.props.currentBuilding}/>
          </Modal>
      </Grid>
      );
    }
  }

const mapStateToProps = state => (
    state.buildingReducer
);

const mapDispatchToProps = {
  showBuildingImg
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildingContainer);

const stylez = (background) => StyleSheet.create({
  modal: {
    height: 660,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    width: '100%',
    backgroundColor: `#${background}`,
  },
});
