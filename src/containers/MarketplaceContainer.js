import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import Navbar from './NavContainer';
import Footer from './FooterContainer';
import styles from '../theme/styles/Containers.style';
import MarketplaceLoading from '../components/Marketplace/MarketplaceLoading';
import Marketplace from '../components/Marketplace/Marketplace'

class MarketplaceContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showMarketplace: false
        }
    }
    render(){
        const { navigation } = this.props;
        setTimeout(() => {
            if(this.state.showMarketplace === false) 
                this.setState({showMarketplace: true})
            }, 2500)
        return (
            <Grid style={styles.grid}>
                <Navbar navigation={navigation} />
                <Row size={75}>
                    <Col size={5} />
                    <Col size={90}>
                        {this.state.showMarketplace? <Marketplace buildings={this.props.buildingReducer.buildingList} navigation={navigation}/> : <MarketplaceLoading />}
                    </Col>
                    <Col size={5} />
                </Row>
                <Footer navigation={navigation} />
            </Grid>
        );
    }
};

const mapStateToProps = state => {
    return {
        buildingReducer: state.buildingReducer,
    }
}

export default connect(mapStateToProps)(MarketplaceContainer);
