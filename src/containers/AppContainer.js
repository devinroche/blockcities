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
    topRow: {
        paddingTop: 40,
        paddingBottom: 10,
        backgroundColor: 'transparent',
    },
    bottomRow: {
        paddingTop: 10,
        borderTopWidth: 0.5,
        borderTopColor: '#95a5a6',
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
        <Row size={10} style={styles.topRow}>
            <Navbar navigation={props.navigation} />
        </Row>
        <Row size={82}>
            <Image
                style={styles.img}
                source={wallpaper}
            />
        </Row>
        <Row size={8} style={styles.bottomRow}>
            <Footer navigation={props.navigation} />
        </Row>
    </Grid>
);


const mapStateToProps = state => (state.reducer);

export default connect(mapStateToProps)(AppContainer);
