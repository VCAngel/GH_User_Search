import React, { Component } from 'react';
import UserProfile from '../user/UserProfile';

class ResultCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main__resultCard">
                <UserProfile type='result'></UserProfile>
                <div className="resultCard__ghData">
                    {/* TODO Fetch data for each user, [repos, followers, following] */}
                </div>
                <div className="resultCard__personalData">
                    {/* TODO Fetch data for each user, [location, company, website, twitter] */}
                </div>
                <div className="resultCard__contributions">
                    {/* TODO? Fetch contributions table */}
                </div>
            </div>
        );
    }
}

export default ResultCard;