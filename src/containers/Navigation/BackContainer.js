import React from 'react';
import { Col, Grid, Row } from 'react-native-easy-grid';
import CenterBtn from '../../components/Nav/CenterBtn';
import { Text } from 'react-native';
import Back from '../../components/Back/Back';
import styles from '../../theme/styles/Navbar.light.style';
import typography from '../../theme/styles/Typography.style';

const BackContainer = props => {
  let bg = props.isGrey ? '#f2f2f2' : '#ffffff'
  return (
    <Row size={8} style={[styles.topRow,  {backgroundColor : bg}]}>
        <Grid style={[styles.grid, {backgroundColor : bg}]}>
            <Col size={20}>
                <Back {...props} />
            </Col>
            <Col size={60}>
                {props.is_logo ? <CenterBtn {...props} /> : <Text style={[typography.pageTitle, {textAlign: 'center'}]}>Settings</Text>}
            </Col>
            <Col size={20} />
        </Grid>
    </Row>
  );
}

export default BackContainer;
