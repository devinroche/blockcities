import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import Navbar from './Navigation/NavContainer';
import Footer from './Navigation/FooterContainer';
import styles from '../theme/styles/Containers.style';
import MarketplaceLoading from '../components/Marketplace/MarketplaceLoading';
import Marketplace from '../components/Marketplace/Marketplace';
import SearchContainer from './Search/SearchContainer';
import { currentBuilding } from '../redux/building/actions';

class MarketplaceContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMarketplace: false,
        };
    }

    render() {
        const { showMarketplace } = this.state
        const { navigation, searchReducer, buildingReducer, currentBuilding } = this.props;
        const buildings = (searchReducer.showSearch && searchReducer.data && searchReducer.data.length > 0) ? searchReducer.data : buildingReducer.buildingList;

        setTimeout(() => {
            if (showMarketplace === false) this.setState({ showMarketplace: true })
        }, 1500);

        return (
            <Grid style={styles.grid}>
                <Col size={2} />
                <Col size={96}>
                    {searchReducer.showSearch && showMarketplace ? <SearchContainer navigation={navigation} /> : <Navbar navigation={navigation} logo /> }
                    <Row size={81}>
                        {showMarketplace ? <Marketplace updateBuilding={currentBuilding} buildings={buildings} isSearch={searchReducer.showSearch} navigation={navigation} /> : <MarketplaceLoading />}
                    </Row>
                    <Footer navigation={navigation} />
                </Col>
                <Col size={2} />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketplaceContainer);
