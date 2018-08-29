import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import styles from '../theme/styles/Containers.style';
import Login from '../components/Login/Login';
import { sendUserLogin } from '../redux/signup/actions';


const LoginContainer = (props) => {
    const { navigation, sendUserLogin } = props;

    return (
        <Grid style={styles.grid}>
            <Row size={0.25} />
            <Login
                navigation={navigation}
                onSubmit={(values) => {
                    sendUserLogin(values);
                    navigation.navigate('Home');
                }}
            />
        </Grid>
    );
};

const mapStateToProps = state => (
    state.signupReducer
);

const mapDispatchToProps = {
    sendUserLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
