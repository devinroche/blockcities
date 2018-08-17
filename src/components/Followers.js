import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from '../theme/styles/CreateAccount.style';

const Followers = ({ profile }) => (
    <Grid style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <TouchableOpacity
            style={[styles.followBtn, {
               
            }]}
        >
            <Text style={styles.whiteText}>Follow</Text>
        </TouchableOpacity>
    </Grid>
);


export default Followers;
