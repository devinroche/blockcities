import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import styles from '../theme/styles/Containers.style';
import Login from '../components/Login/Login';


const LoginContainer = (props) => {
    const { navigation } = props;

    return (
        <Grid style={styles.grid}>
            <Row size={0.25} />
            <Login
                navigation={navigation}
            />
        </Grid>
    );
};

const mapStateToProps = state => (state.profileReducer);

export default connect(mapStateToProps)(LoginContainer);
