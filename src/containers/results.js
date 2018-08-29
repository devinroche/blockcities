import React from 'react';
import {
    StyleSheet, View, FlatList, Image, Text,
} from 'react-native';
import { connect } from 'react-redux';
import { connectInfiniteHits } from 'react-instantsearch-native';
import { filteredBuildings } from '../redux/search/actions';
import { store } from '../redux/store';

const Hits = connectInfiniteHits((props) => {
    const onEndReached = function () {
        if (props.hasMore) {
            props.refine();
        }
    };

    props.updateHits(props.hits);
    return <View />;
});

export default Hits;
