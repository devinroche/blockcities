import React from 'react';
import { InstantSearch } from 'react-instantsearch-native';
import styles from '../../../theme/styles/Navbar.light.style';
import SearchBox from '../../../components/SearchBar';
import Hits from '../results';

const CenterSearch = ({ filteredBuildings }) => {
    return (
      <InstantSearch
      appId="PKUDPP7ZVE"
      apiKey="1b51333cef087f8a88bff30a1200d183"
      indexName="test_blockcities"
      >
          <SearchBox />
          <Hits updateHits={filteredBuildings} />
      </InstantSearch>
    );
};

export default CenterSearch;
