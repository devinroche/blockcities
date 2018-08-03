import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';
import Svg from 'react-native-svg';
import styles from '../theme/styles/Followers.style';

const Marketplace = (props) => {
    return (
        <Grid style={styles.container}>
            <Row>
                <SvgAnimatedLinearGradient height={600}>
                    <Svg.Rect x="0" y="10" rx="5" ry="5" width="400" height="150" />
                    <Svg.Rect x="0" y="180" rx="4" ry="4" width="120" height="20" />
                    <Svg.Rect x="0" y="210" rx="5" ry="5" width="140" height="200" />

                    <Svg.Rect x="0" y="415" rx="4" ry="4" width="140" height="20" />
                    <Svg.Rect x="0" y="440" rx="4" ry="4" width="100" height="20" />
                    <Svg.Rect x="0" y="465" rx="4" ry="4" width="80" height="20" />

                    <Svg.Rect x="150" y="210" rx="5" ry="5" width="140" height="200" />

                    <Svg.Rect x="150" y="415" rx="4" ry="4" width="140" height="20" />
                    <Svg.Rect x="150" y="440" rx="4" ry="4" width="100" height="20" />
                    <Svg.Rect x="150" y="465" rx="4" ry="4" width="80" height="20" />

                    <Svg.Rect x="0" y="490" rx="5" ry="5" width="140" height="200" />
                    <Svg.Rect x="150" y="490" rx="5" ry="5" width="140" height="200" />

                </SvgAnimatedLinearGradient>
            </Row>
        </Grid>
    );
};


export default Marketplace;
