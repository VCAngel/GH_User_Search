import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar';
import ResultCard from '../resultCard/ResultCard';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {}
        }
        this.userDataHandler = (userData) => {
            this.setState({ userData: userData });
        }
    }

    render() {
        console.log(this.state.userData);
        return (
            <main className="main container" >
                <SearchBar userDataHandler={this.userDataHandler}></SearchBar>
                <ResultCard userData={this.state.userData}></ResultCard>
            </main>
        );
    }
}

export default Container;