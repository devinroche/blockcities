import React from 'react';
import { Text } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Grid, Row, Col } from 'react-native-easy-grid';
import RadioBtns from './RadioBtns';
import MyDropdown from './Dropdown';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    render() {
        return (
            <Grid>
                <Row
                    style={{
                        justifyContent: 'center',
                    }}
                >
                    <RadioBtns />
                </Row>
                <Row style={{
                        alignItems: 'flex-start',
                    }}>
                    <Col size={1} />
                    <Col size={4}>
                        <MyDropdown data={1} />
                    </Col>
                    <Col size={2} />
                    <Col size={4}>
                        <MyDropdown data={2} />
                    </Col>
                    <Col size={1} />
                </Row>
            </Grid>
        );
    }
}

export default Filters;
