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
    }
    render(){
        const {profile} = this.props
        return (
            <Grid style={styles.container}>
                <Row>
                    <Col style={styles.grid}>
                        <Text style={style.number}>{profile.buildings.length}</Text>
                        <Text style={style.text}>buildings</Text>
                    </Col>
                    <Col style={styles.grid}>
                        <Text style={style.number}>{profile.followers}</Text>
                        <Text style={style.text}>followers</Text>
                    </Col>
                    <Col style={styles.grid}>
                        <Text style={style.number}>{profile.following}</Text>
                        <Text style={style.text}>followers</Text>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Followers

const style = {
    number: {
        color: '#1e3799',
        fontWeight: 'bold',
        fontSize: 18
    },
    text: {
        color: "#95a5a6",
    }
}