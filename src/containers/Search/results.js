import React from 'react';
import { View } from 'react-native';
import { connectInfiniteHits } from 'react-instantsearch-native';

const Hits = connectInfiniteHits(({ hasMore, refine, hits, updateHits }) => {
    // const onEndReached = () => {
    //     if (hasMore) {
    //         refine();
    //     }
    // };

    updateHits(hits);
    return <View />;
});

export default Hits;
