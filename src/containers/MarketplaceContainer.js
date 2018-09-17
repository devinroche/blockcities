import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {StyleSheet} from 'react-native'
import { connect } from 'react-redux';
import Footer from './Navigation/FooterContainer';
import Modal from 'react-native-modalbox';
import styles from '../theme/styles/Containers.style';
import MarketplaceLoading from '../components/Marketplace/MarketplaceLoading';
import MarketSearch from './Navigation/MarketSearch';
import Marketplace from '../components/Marketplace/Marketplace';
import { currentBuilding } from '../redux/building/actions';
import {toggleFilters, updateCityFilter} from '../redux/search/actions';
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
        const { navigation, searchReducer, buildingReducer, currentBuilding, toggleFilters, updateCityFilter } = this.props;
        const {marketSearchStr, cityFilter, showFilters, showSearch} = searchReducer

        const buildings = showSearch ? (
          buildingReducer.buildingList.filter(el => (
            el.Name.toLowerCase().indexOf(marketSearchStr.toLowerCase()) > -1) && (
              el.City.toLowerCase().indexOf(cityFilter.toLowerCase()) > -1
            )) )
          : (buildingReducer.buildingList)

        setTimeout(() => {
            if (showMarketplace === false) this.setState({ showMarketplace: true })
        }, 1500);

        const closeModalFunc = showFilters ? toggleFilters : null

        return (
            <Grid style={styles.grid}>
                <Col size={2} />
                <Col size={96}>
                <MarketSearch navigation={this.props.navigation} isSearch={showSearch} logo/>
                    <Row size={90}>
                        {showMarketplace ? <Marketplace updateBuilding={currentBuilding} toggleFilters={toggleFilters} buildings={buildings} isSearch={showSearch} navigation={navigation} /> : <MarketplaceLoading />}
                    </Row>
                    <Footer navigation={navigation} />
                </Col>
                <Col size={2} />
                <Modal isOpen={showFilters} style={stylez.modal} onClosed={closeModalFunc} backdrop={false} swipeToClose={true} position={"bottom"} ref={"modal"}>
                    <FilterView updateCityFilter={updateCityFilter} selectedCity={cityFilter} closeModal={closeModalFunc}/>
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
    toggleFilters,
    updateCityFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketplaceContainer);

const stylez = StyleSheet.create({
  modal: {
    height: 530,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    width: '100%',
    backgroundColor: 'rgba(242, 242, 242, 0.95)',
  },
});
