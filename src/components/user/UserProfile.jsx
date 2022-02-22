import React, { Component } from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.setState = {
            matchesUser: false,
        }
    }

    render() {
        if (this.props?.type == 'search') {
            return (
                <SearchProfile input={this.props?.input}></SearchProfile>
            )
        } else if (this.props?.type == 'result') {
            return (
                <ResultProfile></ResultProfile>
            )
        } else
            return <h1>Bad prop</h1>
    }
}

//* Component searchbar variant
const SearchProfile = ({input}) => { 
    return (
        <div className='profileSearch'>
            <div className='profileSearch__img'>
                <img src="" alt="" />
            </div>
            <div className='profileSearch__tag'>
                <a href="#">@{input}</a>
            </div>
        </div>
    );
}

//* Component resultcard variant
const ResultProfile = () => {
    return (
        <div className='profileResult'>
            <div className='profileResult__img'>
                <img src="" alt="" />
            </div>
            <div className='profileResult__tag'>
                <h3>User Name</h3>
                <a href="#">@Test</a>
            </div>
        </div>
    );
}

export default UserProfile;