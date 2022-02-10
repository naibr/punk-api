import React from 'react';

const SearchBox = (props) => {
    const setSearchTerm = props.setSearchTerm

    const getInput = (event) => {
        setSearchTerm(event.target.value)
    }
    return (
        <input onInput={getInput}>
            
        </input>
    )
}

export default SearchBox;
