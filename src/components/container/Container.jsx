import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar';
import UserProfile from '../user/UserProfile';

class Container extends Component {
    constructor(props) {
        super(props);
        this.initialData = {
            avatar_url: "https://avatars.githubusercontent.com/u/42756104?v=4",
            bio: "Likes Programming and Memes",
            blog: "",
            company: null,
            followers: 3,
            following: 6,
            html_url: "https://github.com/VCAngel",
            location: "México",
            login: "VCAngel",
            name: "Ángel Vargas",
            twitter_username: "dedoloco321",
        }
        this.state = {
            userData: this.initialData,
        }
        this.userDataHandler = (userData) => {
            this.setState({ userData: userData });
        }
    }

    render() {
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