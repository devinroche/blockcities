import React from 'react';
import {Dimensions} from 'react-native'
import { Row, Grid } from 'react-native-easy-grid';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';
import { Svg } from 'expo';
import styles from '../../theme/styles/Followers.style';

const MarketplaceLoading = () => (
    <Grid style={styles.container}>
        <Row>
        <SvgAnimatedLinearGradient width={Dimensions.get('window').width} height={600} primaryColor="#f7f8f9" secondaryColor="#eff0f2">
            <Svg.Rect x="20" y="10" rx="5" ry="5" width="380" height="150" />
            <Svg.Rect x="20" y="180" rx="4" ry="4" width="160" height="20" />

            <Svg.Rect x="20" y="210" rx="5" ry="5" width="180" height="240" />
            <Svg.Rect x="20" y="460" rx="4" ry="4" width="180" height="20" />
            <Svg.Rect x="20" y="485" rx="4" ry="4" width="120" height="20" />

            <Svg.Rect x="220" y="210" rx="5" ry="5" width="180" height="240" />
            <Svg.Rect x="220" y="460" rx="4" ry="4" width="180" height="20" />
            <Svg.Rect x="220" y="485" rx="4" ry="4" width="120" height="20" />

            <Svg.Rect x="20" y="520" rx="5" ry="5" width="180" height="200" />
            <Svg.Rect x="220" y="520" rx="5" ry="5" width="180" height="200" />
        </SvgAnimatedLinearGradient>
        </Row>
    </Grid>
);


export default MarketplaceLoading;
