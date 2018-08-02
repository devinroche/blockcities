import React from 'react';
import { Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
    },
    grid: {
        flex: 1,
        alignItems: 'center',
    },
    number: {
        color: '#1e3799',
        fontWeight: 'bold',
        fontSize: 18,
    },
    text: {
        color: '#95a5a6',
    },
};

const Followers = ({ profile }) => (
    <Grid style={styles.container}>
        <Row>
            <Col style={styles.grid}>
                <Text style={styles.number}>
                    {profile.buildings.length}
                </Text>
                <Text style={styles.text}>
buildings
                </Text>
            </Col>
            <Col style={styles.grid}>
                <Text style={styles.number}>
                    {profile.followers}
                </Text>
                <Text style={styles.text}>
followers
                </Text>
            </Col>
            <Col style={styles.grid}>
                <Text style={styles.number}>{profile.following}</Text>
                <Text style={styles.text}>followers</Text>
            </Col>
        </Row>
    </Grid>
);


export default Followers;
