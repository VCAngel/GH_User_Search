import React, { Component } from 'react';
import Social from './Social';

const socialsObj = {
    'github': 'https://github.com/VCAngel',
    'linkedin': '/',
    'platzi': 'https://platzi.com/p/VCAngel/',
    'twitter': 'https://twitter.com/Dedoloco321',
};

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isCovered: false,
            socialList: [],
        }
    }

    generateSocials = () => {
        const socialEntries = Object.entries(socialsObj);
        let direction;
        console.log(socialEntries);
        return socialEntries.map((socialEntry, index) => {
            let j = 0;
            index >= 2 ? direction = 'left' : direction = 'right';
            return <Social mod={socialEntry[index, j]} link={socialEntry[index, ++j]} direction={direction}></Social>
        })
    }

    render() {
        return (
            <nav>
                <span className="logo">{this?.props?.text}</span>
                {this.generateSocials()}
            </nav>
        )
    }
}


export default Logo;