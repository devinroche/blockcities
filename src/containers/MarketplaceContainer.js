import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {StyleSheet, Text} from 'react-native'
import { connect } from 'react-redux';
import Navbar from './Navigation/NavContainer';
import Footer from './Navigation/FooterContainer';
import Modal from 'react-native-modalbox';
import styles from '../theme/styles/Containers.style';
import MarketplaceLoading from '../components/Marketplace/MarketplaceLoading';
import MarketSearch from './Navigation/MarketSearch';
import Marketplace from '../components/Marketplace/Marketplace';
import SearchContainer from './Search/SearchContainer';
import { currentBuilding } from '../redux/building/actions';
import {toggleFilters} from '../redux/search/actions';
import FilterView from '../components/Marketplace/FilterView'

class MarketplaceContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMarketplace: false,
        };
    }

    render() {
        const { showMarketplace } = this.state
        const { navigation, searchReducer, buildingReducer, currentBuilding, toggleFilters } = this.props;
        const buildings = searchReducer.showSearch ? buildingReducer.buildingList.filter(el => el.Name.toLowerCase().indexOf(searchReducer.marketSearchStr.toLowerCase()) > -1) : buildingReducer.buildingList;
        setTimeout(() => {
            if (showMarketplace === false) this.setState({ showMarketplace: true })
        }, 1500);

        console.log(searchReducer.showFilters)
        if(searchReducer.showFilters){
          this.refs.modal2.open()
        }
        return (
            <Grid style={styles.grid}>
                <Col size={2} />
                <Col size={96}>
                <MarketSearch navigation={this.props.navigation} isSearch={searchReducer.showSearch} logo/>
                    <Row size={90}>
                        {showMarketplace ? <Marketplace updateBuilding={currentBuilding} toggleFilters={toggleFilters} buildings={buildings} isSearch={searchReducer.showSearch} navigation={navigation} /> : <MarketplaceLoading />}
                    </Row>
                    <Footer navigation={navigation} />
                </Col>
                <Col size={2} />
                {/* {searchReducer.showSearch ? <FilterView/> : ""} */}
                <Modal style={[stylez.modal, stylez.modal2]} onClosed={toggleFilters} backdrop={false} swipeToClose={true} position={"bottom"} ref={"modal2"}>
                    <FilterView />
                </Modal>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    buildingReducer: state.buildingReducer,
    searchReducer: state.searchReducer,
});

const mapDispatchToProps = {
    currentBuilding,
    toggleFilters
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketplaceContainer);

const stylez = StyleSheet.create({

  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal2: {
    height: 525,
    width: '100%',
    backgroundColor: 'rgba(242, 242, 242, .99)',
  },

  text: {
    color: "black",
    fontSize: 22
  }

});
