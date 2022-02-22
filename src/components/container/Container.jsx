import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import ResultCard from '../resultCard/ResultCard';

const Container = () => {
    return(
        <main className="main container">
            <SearchBar></SearchBar>
            <ResultCard></ResultCard>
        </main>
    );
}

export default Container;