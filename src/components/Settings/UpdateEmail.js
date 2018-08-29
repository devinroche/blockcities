import React from 'react';
import { Row, Grid, Col } from 'react-native-easy-grid';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../theme/styles/Settings.style';
import font from '../../theme/styles/Typography.style';

const UpdateEmail = () => (
    <Row size={2}>
        <Grid>
            <Row size={0.75}>
                <Text style={font.strong}>Update Email</Text>
            </Row>
            <Row size={1}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => console.log(text)}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    placeholder="you@email.com"
                    value=""
                />
            </Row>
            <Row size={1} style={styles.response}>
                <Col>
                    <Text style={font.info}>Verify your new email.</Text>
                </Col>
                <Col>
                    <TouchableOpacity
                        onPress={() => console.log('fart')}
                        style={styles.smallButton}
                    >
                        <Text style={font.light}>Send Verification Email</Text>
                    </TouchableOpacity>
                </Col>
            </Row>
        </Grid>
    </Row>
);

export default UpdateEmail;
