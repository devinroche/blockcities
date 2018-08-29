import React from 'react';
import { Text } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {Grid, Row, Col} from 'react-native-easy-grid'
import RadioBtns from './RadioBtns'

class Filters extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: 0
        }
    }
    render(){
        return (
            <Grid>
                <Row size={4} style={{
                    justifyContent: 'center',
                }}>
                    <RadioBtns />
                </Row>
                <Row size={2}>
                    <Text>Sort</Text>
                </Row>
                <Row>
                    <Col size={5}>
                        <Text>Price</Text>
                    </Col>
                    <Col size={1}/>
                    <Col size={5}>
                        <Text>low to high</Text>
                    </Col>
                </Row>
            </Grid>
        );
    }
};

export default Filters;
