import React, { Component } from 'react';
import Social from './Social';

const socialsObj = {
    'vcangel': '#',
    'linkedin': '#',
    'github': 'https://github.com/VCAngel',
    'twitter': 'https://twitter.com/Dedoloco321',
};

class Navbar extends Component {
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
        // console.log(socialEntries);
        return socialEntries.map((socialEntry, index) => {
            let j = 0;
            return <Social key={socialEntry[index, j]} mod={socialEntry[index, j]} link={socialEntry[index, ++j]}></Social>
        })
    }

    render() {
        return (
            <header className='header'>
                <div className='header__container'>
                    <nav className="navbar">
                        <h4 className="navbar__title">Github User Search</h4>
                        <ul className="navbar__item">
                            {this.generateSocials()}
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}


export default Navbar;