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
                avatar_url: '',
                html_url: '',
                followers: 0,
                following: 0,
                location: '',
                company: '',
                bio: '',
            },
        }
        this.node = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.onChange);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.onUserChange);
    }

    onChange = (evt) => {
        if (this.node.current.contains(evt.target))
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
                    .finally(() => {
                        let { login, avatar_url, html_url, followers, following, location, company, bio } = userAPI;

                        this.setState({
                            userData: {
                                login, avatar_url, html_url, followers, following, location, company, bio
                            }
                        })
                    })
            }

        })

    }

    render() {
        return (
            <div className='main__searchBar'>
                <div className="main__searchBar--input">
                    <input type='text' placeholder='Search User' id='userInput' onChange={this.onUserChange} onClick={this.onChange} ref={this.node} />
                    <button type='button' className='fa-solid fa-magnifying-glass' onClick={this.apiQuery}>
                    </button>
                </div>

                <div className="main__searchBar--output">
                    {/* TODO Add user profile; search variation */}
                    {/* TODO Add dynamic searches logic */}

                    <UserProfile type='search' input=""></UserProfile>
                </div>
            </div>
        );
    }
}

export default SearchBar;