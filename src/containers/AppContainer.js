import React from 'react';
import { Row, Grid, Col } from 'react-native-easy-grid';
import { Image, Text } from 'react-native';
import { connect } from 'react-redux';
import Navbar from './NavContainer';
import wallpaper from '../utils/wallpaper.png';
import Footer from './FooterContainer';
import styles from '../theme/styles/Containers.style';
import theme from '../theme/theme';
import Spinner from '../components/Spinner';
import MyCityBtn from '../components/MyCity/MyCityBtn'
import TopCitiesBtn from '../components/MyCity/TopCitiesBtn'

const AppContainer = props => {
    const {loadApp, user} = props;
    console.log(props)

    if(!loadApp)
        return <Spinner/>

    return (
        <Grid style={styles.grid}>
            {/* <Row size={1} style={{ backgroundColor: theme.LIGHT_BLUE }} /> */}
            <Navbar navigation={props.navigation} darkMode user={user}/>
            <Row size={10} style={{ backgroundColor: theme.LIGHT_BLUE }}>
                <Col size={2.5}/>
                <Col size={3}><MyCityBtn/></Col>
                <Col size={1}/>
                <Col size={3}><TopCitiesBtn/></Col>
                <Col size={2.5}/>
            </Row>
            <Row size={81} style={styles.body}>
                <Image
                    style={styles.img}
                    source={wallpaper}
                />
            </Row>
            <Footer navigation={props.navigation} darkMode />
        </Grid>
    );
}


const mapStateToProps = state => (
    state.signupReducer
)

export default connect(mapStateToProps)(AppContainer);
