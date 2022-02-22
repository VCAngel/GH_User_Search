import React from 'react';
import UserProfile from '../user/UserProfile';

const SearchBar = () => {
    const [value, setValue] = React.useState();
    const inputRef = React.createRef();

    function updateUserProfile() {
        setValue(inputRef.current.value)
    }

    return (
        <div className='main__searchBar'>
            <div className="main__searchBar--input">
                <input type='text' placeholder='Search User' id='userInput' onChange={updateUserProfile} ref={inputRef} />
                <button type='button'>
                    {/*TODO Add search icon*/}
                    Search
                </button>
            </div>

            <div className="main__searchBar--output">
                {/* TODO Add user profile; search variation */}
                {/* TODO Add dynamic searches logic */}
                <UserProfile type='search' input={value}></UserProfile>
            </div>
        </div>
    );
}


export default SearchBar;