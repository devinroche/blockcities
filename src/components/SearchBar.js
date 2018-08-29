import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Image,
    Text,
    TextInput,
} from 'react-native';

import { connectInfiniteHits, connectSearchBox } from 'react-instantsearch-native';

const SearchBox = connectSearchBox(({ refine, currentRefinement }) => {
    const styles = {
        padding: 15,
        fontSize: 24,
        width: '100%',
        height: '100%',
    };

    return (
        <TextInput
            style={styles}
            onChangeText={text => refine(text)}
            value={currentRefinement}
            placeholder="Search buildings, cities..."
            clearButtonMode="always"
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize="none"
        />
    );
});

export default SearchBox;
