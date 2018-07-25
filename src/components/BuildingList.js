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

class BuildingList extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render(){
        const {buildings} = this.props.profile
        return (
            <Grid style={styles.container}>
                {
                    buildings.map((e, i) => {
                        console.log(e, i)
                    })
                }
            </Grid>
        );
    }
}

export default BuildingList

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