import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import styles from '../theme/styles/Containers.style';
import CreateAccount from '../components/CreateAccount/CreateAccount';


const CreateAccountContainer = (props) => {
    const { navigation } = props;

    return (
        <Grid style={styles.grid}>
            <CreateAccount
                navigation={navigation}
            />
            <Row size={0.5} />
        </Grid>
    );
};

const mapStateToProps = state => (state.reducer);

export default connect(mapStateToProps)(CreateAccountContainer);
