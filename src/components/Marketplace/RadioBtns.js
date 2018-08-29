import React from 'react';
import { Text } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {Grid, Row, Col} from 'react-native-easy-grid'

const radio_props = [
    {label: "for sale", value: 0},
    {label: "will build", value: 1},
    {label: "all", value: 2},
]

class RadioBtns extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: 0
        }
    }
    render(){
        return (
            <RadioForm
                formHorizontal={true}
                animation={true}
                >
                {radio_props.map((obj, i) => {
                    return(
                        <RadioButton
                            isSelected={this.state.value === i}
                            obj={obj}
                            key={i}
                            index={i}
                            labelHorizontal={true}
                            buttonSize={10}
                            buttonColor={'#4D92FF'}
                            style={{
                                borderWidth: 1,
                                borderColor: '#F2F2F2',
                                paddingVertical: 10,
                                paddingHorizontal: 15,
                                marginHorizontal: 10,
                                flex: 1,
                            }}
                            buttonStyle={[this.state.value === i ? {borderWidth: 1} : {borderWidth: 1, borderColor: '#828282'}]}
                            labelColor={'#828282'}
                            onPress={(value, index) => {
                                this.setState({value: index});
                            }}
                        />
                    )
                })}
            </RadioForm>
        );
    }
};

export default RadioBtns;
