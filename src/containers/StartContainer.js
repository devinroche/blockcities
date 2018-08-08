import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import styles from '../theme/styles/Containers.style';
import Start from '../components/StartScreen/Start';


const StartContainer = (props) => {
    const { navigation } = props;

    return (
        <Grid style={styles.grid}>
            <Row size={0.75} />
            <Row size={3.25}>
                <Start
                    navigation={navigation}
                />
            </Row>
        </Grid>
    );
};

const mapStateToProps = state => (state.profileReducer);

export default connect(mapStateToProps)(StartContainer);
