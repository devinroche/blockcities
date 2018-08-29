import React from 'react';
import { Text, View, Picker } from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';
import { Dropdown } from 'react-native-material-dropdown';

const sort1 = [
    { value: 'price'},
    { value: 'era'},
    { value: 'speed'}
];

const sort2 = [
    { value: 'low to high'},
    { value: 'high to low'},
];

class MyDropdown extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            language: ''
        }
    }
    render(){
        if(this.props.data == 2) {
            return (
                <View style={{flex: 1}}>
                    <Dropdown
                        data={sort2}
                        label={'sorting'}
                        textColor={'#828282'}
                        fontSize={14}
                    />
                </View>
            );
        }
        return (
            <View style={{flex: 1}}>
                <Dropdown
                    data={sort1}
                    textColor={'#828282'}
                    label={'sort by'}
                    overlayStyle={{borderWidth: 1}}
                    fontSize={14}
                />
            </View>
        );
    }
};

export default MyDropdown;
