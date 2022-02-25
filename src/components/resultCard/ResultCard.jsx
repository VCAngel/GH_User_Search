import React, { Component } from 'react';
import UserProfile from '../user/UserProfile';

class ResultCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.userData.login);
        return (
            <div className="main__resultCard">
                <UserProfile type='result' userData={this.props.userData}/>
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