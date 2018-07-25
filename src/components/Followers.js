import React from 'react';
import {View, Text} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

const styles = {
    container: {
        flex: 1, 
        alignItems: 'center'
    },
    grid: {
        flex: 1,
        alignItems: 'center',
    },
};

class Followers extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render(){
        const {profile} = this.props
        return (
            <Grid style={styles.container}>
                <Row>
                    <Col style={styles.grid}>
                        <Text>{profile.buildings.length}</Text>
                        <Text>buildings</Text>
                    </Col>
                    <Col style={styles.grid}>
                        <Text>{profile.followers}</Text>
                        <Text>followers</Text>
                    </Col>
                    <Col style={styles.grid}>
                        <Text>{profile.following}</Text>
                        <Text>followers</Text>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Followers