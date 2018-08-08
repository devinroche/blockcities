import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import styles from '../theme/styles/Containers.style';
import CreateAccountNext from '../components/CreateAccount/CreateAccountNext';
import {sendUserInfo} from '../redux/signup/actions';

const CreateAccountNextContainer = (props) => {
    const { navigation, sendUserInfo } = props;

    return (
        <Grid style={styles.grid}>
            <CreateAccountNext
                navigation={navigation}
                onSubmit={(values) => sendUserInfo(values)}
            />
            <Row size={0.5} />
        </Grid>
    );
};

const mapStateToProps = state => {
    return { state };
};

const mapDispatchToProps = {
    sendUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountNextContainer);
