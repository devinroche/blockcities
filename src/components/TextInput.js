import React from "react";
import { TextInput, Text } from "react-native";
import { Row, Grid } from 'react-native-easy-grid';
import font from '../theme/styles/Typography.style';
import styles from '../theme/styles/CreateAccount.style';

export default function MyTextInput(props) {
    const { input, type, meta: { touched, error }, ...inputProps } = props;
    const style = [styles.input];
    if (touched && error) style.push(styles.errorInput);
    return (
        <Grid style={styles.container}>
            <Row>
                <TextInput
                    {...inputProps}
                    style={style}
                    secureTextEntry={type === 'password'}
                    underlineColorAndroid="transparent"
                    onChangeText={input.onChange}
                    onBlur={input.onBlur}
                    onFocus={input.onFocus}
                    value={input.value}
                />
            </Row>
            <Row>
                {touched && (error && <Text style={[font.error, styles.errorText]}>{error}</Text>)}
            </Row>
        </Grid>
    );
}
