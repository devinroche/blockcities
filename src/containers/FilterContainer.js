import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import ProfileSearch from './Navigation/ProfileSearch';
import Footer from './Navigation/FooterContainer';
import styles from '../theme/styles/Profile.style';
import style from '../theme/styles/Followers.style';
import { currentBuilding } from '../redux/building/actions';

const FilterContainer = (props) => {
    const { buildingReducer, signupReducer, profileSearchStr } = props;
    return (
        <Grid style={styles.grid}>
          <Row size={90}>
                <Text>hi</Text>
          </Row>
        </Grid>
    );
};

// const mapStateToProps = state => {
//   return {
//   }
// };

// const mapDispatchToProps = {
//     currentBuilding,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

export default FilterContainer