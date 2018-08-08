import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import styles from '../theme/styles/Containers.style';
import CreateAccountNext from '../components/CreateAccount/CreateAccountNext';

const handleSubmit = values => {
    console.log(values)
}

const CreateAccountNextContainer = (props) => {
    const { navigation } = props;

    return (
        <Grid style={styles.grid}>
            <CreateAccountNext
                navigation={navigation}
                onSubmit={(values) => console.log('Submitted!', JSON.stringify(values))}
            />
            <Row size={0.5} />
        </Grid>
    );
};

const mapStateToProps = state => (state.profileReducer);

export default connect(mapStateToProps)(CreateAccountNextContainer);
