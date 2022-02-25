import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar';
import UserProfile from '../user/UserProfile';

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
                {/* !Search Bar */}
                <SearchBar userDataHandler={this.userDataHandler}></SearchBar>

                {/* !Result Card */}
                <div className="main__resultCard">
                    <UserProfile type='result' userData={this.state.userData} />
                </div>

            </main >
        );
    }
}

export default Container;