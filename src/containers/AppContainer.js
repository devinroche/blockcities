import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import Navbar from './NavContainer';
import wallpaper from '../utils/wallpaper.png';
import Footer from './FooterContainer';


const styles = {
    grid: {
        backgroundColor: '#ffffff',
    },
    img: {
        flex: 1,
        resizeMode: 'cover',
        width: null,
        height: null,
    },
};


const AppContainer = props => (
    <Grid style={styles.grid}>
        <Navbar navigation={props.navigation} darkMode={true}/>
        <Row size={82} style={{backgroundColor: '#B9DBF0'}}>
            <Image
                style={styles.img}
                source={wallpaper}
            />
        </Row>
        <Footer navigation={props.navigation} darkMode={true}/>
    </Grid>
);


const mapStateToProps = state => (state.reducer);

export default connect(mapStateToProps)(AppContainer);
