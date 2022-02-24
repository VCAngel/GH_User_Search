import React, { Component } from 'react';
import Social from './Social';

const socialsObj = {
    'vcangel': '#',
    'github': 'https://github.com/VCAngel',
    'linkedin': '#',
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
                        <h4 className="navbar__title">
                            <span className="fa-brands fa-github"></span> Github user search
                        </h4>
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