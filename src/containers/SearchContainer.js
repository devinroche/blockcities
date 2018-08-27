import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import {
    TextInput, Text, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import Navbar from './NavContainer';
import Footer from './FooterContainer';
import styles from '../theme/styles/Containers.style';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const SearchContainer = (props) => {
    const { navigation } = props;
    return (
        <Grid style={styles.grid}>
            <Navbar navigation={navigation} />
            <Row size={75}>
                <Col size={5} />
                <DismissKeyboard>

                    <Col size={90}>
                        <Row size={10}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Search buildings, cities ..."
                                onChangeText={text => console.log(text)}
                                value=""
                            />
                        </Row>
                        <Row size={94}>
                            <Text>show list of results here...</Text>
                        </Row>
                    </Col>

                </DismissKeyboard>
                <Col size={5} />
            </Row>
            <Footer navigation={navigation} />
        </Grid>
    );
};

export default SearchContainer;
