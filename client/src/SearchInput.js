<<<<<<< HEAD
import React, {useState} from 'react';

function SearchInput (props) {

    const [searchQuery, setSearchQuery] = useState(""); 
    
    return (
    <div>
        <input type='text' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} /> <button onClick={() => props.kek(searchQuery)}>Submit</button>
    </div>
    )
}

//1. ta input från text
//2.skicka submitknappen triggar en event: inputen i rutan skickas till app.js
//app.js lägger in inputen i sin server request.
//express använder querystringen för att söka.

=======
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


>>>>>>> 48bbf2a1e87f7840e0be1973730637983a3139eb
export default SearchInput;