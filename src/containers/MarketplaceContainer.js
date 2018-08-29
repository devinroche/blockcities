import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import Navbar from './NavContainer';
import Footer from './FooterContainer';
import styles from '../theme/styles/Containers.style';
import MarketplaceLoading from '../components/Marketplace/MarketplaceLoading';
import Marketplace from '../components/Marketplace/Marketplace'
import SearchContainer from './SearchContainer'
import {currentBuilding} from '../redux/building/actions'

class MarketplaceContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showMarketplace: false
        }
    }
    render(){
        const { navigation, searchReducer, buildingReducer } = this.props;
        const buildings = searchReducer.data && searchReducer.data.length > 0 ? searchReducer.data : buildingReducer.buildingList

        setTimeout(() => {
            if(this.state.showMarketplace === false)
                this.setState({showMarketplace: true})
            }, 1500)
        return (
            <Grid style={styles.grid}>
                {/* {this.props.searchReducer.showSearch && this.state.showMarketplace ? <SearchContainer  navigation={navigation}/> : <Navbar navigation={navigation} /> } */}
                    <Col size={2} />
                    <Col size={96}>
                        {this.props.searchReducer.showSearch && this.state.showMarketplace ? <SearchContainer  navigation={navigation}/> : <Navbar navigation={navigation} /> }
                        <Row size={81}>
                            {this.state.showMarketplace ? <Marketplace updateBuilding={this.props.currentBuilding} buildings={buildings} isSearch={this.props.searchReducer.showSearch} navigation={navigation}/> : <MarketplaceLoading />}
                        </Row>
                        <Footer navigation={navigation} />
                    </Col>
                    <Col size={2}/>
            </Grid>
        );
    }
};

const mapStateToProps = state => {
    return {
        buildingReducer: state.buildingReducer,
        searchReducer: state.searchReducer
    }
}

const mapDispatchToProps = {
    currentBuilding
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketplaceContainer);
