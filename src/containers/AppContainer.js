import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import Navbar from './NavContainer';
import wallpaper from '../utils/wallpaper.png';
import Footer from './FooterContainer';
import styles from '../theme/styles/Containers.style';
import theme from '../theme/theme';

const AppContainer = props => (
    <Grid style={styles.grid}>
        <Row size={2} style={{ backgroundColor: theme.LIGHT_BLUE }} />
        <Navbar navigation={props.navigation} darkMode />
        <Row size={84} style={styles.body}>
            <Image
                style={styles.img}
                source={wallpaper}
            />
        </Row>
        <Footer navigation={props.navigation} darkMode />
    </Grid>
);


const mapStateToProps = state => (state.profileReducer);

export default connect(mapStateToProps)(AppContainer);
