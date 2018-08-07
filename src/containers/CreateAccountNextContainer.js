import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import styles from '../theme/styles/Containers.style';
import CreateAccountNext from '../components/CreateAccount/CreateAccountNext';


const CreateAccountNextContainer = (props) => {
    const { navigation } = props;

    return (
        <Grid style={styles.grid}>
            <CreateAccountNext
                navigation={navigation}
            />
            <Row size={0.5} />
        </Grid>
    );
};

const mapStateToProps = state => (state.reducer);

export default connect(mapStateToProps)(CreateAccountNextContainer);
