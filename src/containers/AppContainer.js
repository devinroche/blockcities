import React from 'react';
import { Row, Grid, Col } from 'react-native-easy-grid';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import Navbar from './Navigation/NavContainer';
import wallpaper from '../../assets/img/homebase.png';
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
                {/* <Col size={2} /> */}
                  <Row size={10} style={{paddingTop: 5}}>
                    <Col size={90} style={{paddingHorizontal: 7.5}}>
                    <Navbar navigation={navigation} darkMode user={user} />
                    </Col>
                    </Row>
                    <Row size={85} style={styles.body}>
                        <Image
                            style={styles.img}
                            source={wallpaper}
                        />
                    </Row>
                    <Row size={5}>
                    <Col size={96}>
                    <Footer navigation={navigation} darkMode />
                    </Col>
                    </Row>
                {/* </Col> */}
                {/* <Col size={2} /> */}
            </Grid>
        );
    }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    signup: state.signupReducer,
  };
}

const mapDispatchToProps = {
    getBuildings,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
