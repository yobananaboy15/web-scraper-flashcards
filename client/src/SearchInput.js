import React, { useState } from 'react';

function SearchInput (query) {

    const [queryString, setQueryString] = useState('')

    return (
        <>
        <input type='text' value={queryString} onChange={e => setQueryString(e.target.value)} />
        <button onClick={e => console.log(queryString)}>Test</button>
        </>
    )
};


export default SearchInput;