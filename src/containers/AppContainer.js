import React from 'react';
import { Row, Grid, Col } from 'react-native-easy-grid';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import Navbar from './Navigation/NavContainer';
import wallpaper from '../../assets/img/wallpaper.png';
import Footer from './Navigation/FooterContainer';
import styles from '../theme/styles/Containers.style';
import theme from '../theme/theme';
import Spinner from '../components/Spinner';
import MyCityBtn from '../components/MyCity/MyCityBtn';
import TopCitiesBtn from '../components/MyCity/TopCitiesBtn';
import { getBuildings } from '../redux/building/actions';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.props.getBuildings();
    }

    componentDidMount() {
        if (this.props.signup.loginErr) {
            this.props.navigation.navigate('Login');
        };
    }

    render() {
        const { loadApp, user, loginErr } = this.props.signup;
        const { navigation } = this.props;

        if (!loadApp) return <Spinner />;

        return (
            <Grid style={[styles.grid, { backgroundColor: theme.LIGHT_BLUE }]}>
                <Col size={2} />
                <Col size={96}>
                    <Navbar navigation={navigation} darkMode user={user} />
                    <Row size={90} style={styles.body}>
                        <Image
                            style={styles.img}
                            source={wallpaper}
                        />
                    </Row>
                    <Footer navigation={navigation} darkMode />
                </Col>
                <Col size={2} />
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    signup: state.signupReducer,
});

const mapDispatchToProps = {
    getBuildings,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
