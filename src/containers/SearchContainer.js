import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import {
    TextInput, Text, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import Navbar from './NavContainer';
import Footer from './FooterContainer';

const styles = {
    grid: {
        backgroundColor: '#ffffff',
    },
    topRow: {
        paddingTop: 40,
        paddingBottom: 10,
    },
    bottomRow: {
        paddingTop: 10,
        borderTopWidth: 0.5,
        borderTopColor: '#95a5a6',
    },
};

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const SearchContainer = props => (
    <Grid style={styles.grid}>
        <Navbar navigation={props.navigation} />
        <Row size={75}>
            <Col size={5} />
            <DismissKeyboard>
                <Col size={90}>
                    <Row size={10}>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', width: '100%' }}
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
        <Footer navigation={props.navigation} />
    </Grid>
);

const mapStateToProps = state => (state.reducer);

export default connect(mapStateToProps)(SearchContainer);
