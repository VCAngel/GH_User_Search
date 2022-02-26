import React, { Component } from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props?.type == 'search') {
            return (
                <SearchProfile></SearchProfile>
            )
        } else if (this.props?.type == 'result') {
            return (
                <ResultProfile
                    login={this?.props?.userData.login}
                    name={this?.props?.userData.name}
                    avatar_url={this?.props?.userData.avatar_url}
                    html_url={this?.props?.userData.html_url}
                    followers={this?.props?.userData.followers}
                    following={this?.props?.userData.following}
                    bio={this?.props?.userData.bio}
                />
            )
        } else
            return <h1>Bad prop</h1>
    }
}

//* Component searchbar variant
//TODO Implement component with dynamic filtering
const SearchProfile = (props) => {
    return (
        <div href="#" id="profileSearch" className='profileSearch' >
            <div className='rounded-container--search'>
                <img className='rounded-img' src="https://avatars.githubusercontent.com/u/42756104?v=4" alt="" />
            </div>
            <div className='profileSearch__tag'>
                <p>@{input}<span> | {input}</span></p>
            </div>
        </div>
    );
}

//* Component resultcard variant
const ResultProfile = ({ login, name, avatar_url, html_url, followers, following, location, company, blog, twitter_username, bio }) => {
    return (
        <div className='profileResult'>
            <div className='profileResult__ghUser'>
                <div className='rounded-container--result'>
                    <img className='rounded-img' src={avatar_url} alt="avatar" />
                </div>
                <div className='profileResult__ghUser--info'>
                    <h3>{name}</h3>
                    <div>
                        <a href={html_url}>@{login}</a>
                        <div id='follow'>
                            <p id='followers'><span>{followers}</span> followers</p>
                            <span>•</span>
                            <p id='following'><span>{following}</span> following</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='profileResult__ghData'>
                <div className='profileResult__ghData--info'>
                </div>
                <p className='profileResult__ghData--bio'>{bio}</p>
            </div>

        </div>
    );
}

export default UserProfile;