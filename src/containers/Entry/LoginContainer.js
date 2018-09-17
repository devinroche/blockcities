import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';
import {Keyboard} from 'react-native'
import { connect } from 'react-redux';
import styles from '../../theme/styles/Containers.style';
import Login from '../../components/Login/Login';
import { sendUserLogin } from '../../redux/signup/actions';


const LoginContainer = (props) => {
    const { navigation, sendUserLogin, loginErr } = props;
    const submitHelper = async (info) => {
        await sendUserLogin(info);
    };

    const navHelper = () => {
        if (!loginErr) {
            navigation.navigate('Home');
            return;
        }
        navigation.navigate('Login');
    };
    return (
        <Grid style={styles.grid}>
            <Row size={0.25} />
            <Login
                navigation={navigation}
                showErrorText={loginErr}
                onSubmit={async (values) => {
                    Keyboard.dismiss()
                    await submitHelper(values)
                    await navHelper()
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
