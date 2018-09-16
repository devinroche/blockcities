import React from 'react';
import {
    Text, ScrollView, TouchableOpacity, View, StyleSheet, Image, Dimensions
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import style from '../../theme/styles/BuildingPage.style';
import Btn from './Btn';
import Header from './Header';
import { ContentCol, ContentRow } from './Content';
import { Transition } from 'react-navigation-fluid-transitions';
import font from '../../theme/styles/Typography.style';
import BuildingFeatures from './BuildingFeatures'

const ImageSlide = props => {
        const { item } = props;
        return (
            <Transition appear="bottom" disappear="bottom">
                <View style={[{
                  position: 'absolute',
                  width: Dimensions.get('window').width,
                  height: Dimensions.get('window').height-40,
                  left: 0,
                  bottom: 0
                }, { backgroundColor: `#${item.Color}` },]}>
                    <Image
                        style={style.img}
                        source={{ uri: item.ImageURL }}
                        minimumZoomScale={0.5}
                        maximumZoomScale={3}
                        androidScaleType="center"
                        resizeMode="contain"
                    />
              </View>
            </Transition>
        );
    }
}
export default ImageSlide;
