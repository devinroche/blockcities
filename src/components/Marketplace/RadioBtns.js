import React from 'react';
import { View } from 'react-native';
import RadioForm, { RadioButton } from 'react-native-simple-radio-button';
import { Grid, Row, Col } from 'react-native-easy-grid';

const radio_props = [
    { label: 'for sale', value: 0 },
    { label: 'will build', value: 1 },
    { label: 'all', value: 2 },
];

class RadioBtns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    render() {
        return (
            <RadioForm
                formHorizontal
                animation
                style={{justifyContent: 'space-evenly'}}
            >
                {radio_props.map((obj, i) => (
                  <View key={i} style={{marginHorizontal: 15, textAlign: 'center'}}>
                    <RadioButton
                        isSelected={this.state.value === i}
                        obj={obj}
                        index={i}
                        labelHorizontal
                        buttonSize={6}
                        buttonColor="#4D92FF"
                        style={{
                            borderWidth: 1,
                            borderColor: '#F2F2F2',
                            paddingHorizontal: 15,
                            paddingVertical: 0,
                            marginVertical: 0,
                            justifyContent: 'center',
                            height: 45,
                            width: 110
                        }}
                        buttonStyle={[this.state.value === i ? { borderWidth: 1 } : { borderWidth: 1, borderColor: '#828282' }]}
                        labelColor="#828282"
                        onPress={(value, index) => {
                            this.setState({ value: index });
                        }}
                    />
                    </View>
                ))}
            </RadioForm>
        );
    }
}

export default RadioBtns;
