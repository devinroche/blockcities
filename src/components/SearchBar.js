import React from 'react';
import {
    TextInput,
} from 'react-native';

import { connectSearchBox } from 'react-instantsearch-native';

const SearchBox = connectSearchBox(({ refine, currentRefinement }) => {
    const styles = {
        padding: 15,
        fontSize: 24,
        width: '100%',
        height: '100%',
    };
    console.log(currentRefinement)
    return (
        <TextInput
            style={styles}
            textAlign={'center'}
            onChangeText={text => refine(text)}
            value={currentRefinement}
            placeholder="Search buildings, cities..."
            clearButtonMode="never"
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize="none"
        />
    );
});

export default SearchBox;
