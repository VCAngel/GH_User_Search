import React, { Component } from 'react';
import axios from 'axios';
import UserProfile from '../user/UserProfile';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            query: '',
            userData: {
                login: '',
                name: '',
                avatar_url: '',
                html_url: '',
                followers: 0,
                following: 0,
                location: '',
                company: '',
                blog: '',
                twitter_username: '',
                bio: '',
            },
        }
        this.input = React.createRef();
        this.btn = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.onChange);
        this.input.current.addEventListener('keydown', (evt) => {
            if(evt.keyCode === 13){
                evt.preventDefault();
                this.btn.current.click();
            }
        });
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.onUserChange);
    }

    onChange = (evt) => {
        if (this.input.current.contains(evt.target))
            return

        this.setState({ user: [] })
    }

    onUserChange = (evt) => {
        //-> User query
        let query = evt.target.value.toLowerCase();
        this.setState({
            term: query,
            query: `https://api.github.com/search/users?q=${query}`
        });
    }

    apiQuery = async (evt) => {
        let userFetch = [];
        let userAPI = {};

        //-> User fetch
        await axios
            .get(this?.state?.query)
            .then(res => userFetch = res.data.items)
            .catch(err => console.error(err))

        userFetch.forEach(async item => {
            const login = item.login.toLowerCase();
            if (this?.state?.term == login) {
                // console.log(item)

                await axios
                    .get(item.url)
                    .then(res => userAPI = res.data)
                    .catch(err => console.error(err))
                    .then(() => {
                        let { login, name, avatar_url, html_url, followers, following, location, blog, twitter_username, company, bio } = userAPI;

                        this.setState({
                            userData: {
                                login, name, avatar_url, html_url, followers, following, location, blog, twitter_username, company, bio
                            }
                        })
                    })
                    .finally(() => {
                        //->Bubble up state to Container.jsx
                        this.props.userDataHandler(this.state.userData);
                    })
            }
        })
    }

    render() {
        return (
            <div className='main__searchBar'>
                <div className="main__searchBar--input">
                    <input type='text' placeholder='Search User' id='userInput' onChange={this.onUserChange} onClick={this.onChange} ref={this.input} />
                    <button type='button' className='fa-solid fa-magnifying-glass' onClick={this.apiQuery} ref={this.btn}>
                    </button>
                </div>

                {/* <div className="main__searchBar--output"> */}
                {/* TODO Add dynamic searches filtering */}
                {/* <UserProfile type='search' userData={this?.state?.userData}></UserProfile> */}
                {/* </div> */}
            </div>
        );
    }
}

export default SearchBar;