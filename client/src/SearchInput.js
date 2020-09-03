import React, {useState} from 'react';

function SearchInput () {
    const [searchQuery, setSearchQuery] = useState(""); 

    return (
    <div>
        <input type='text' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} /> <button>Submit</button>
    </div>
    )
}

//1. ta input från text
//2.skicka submitknappen triggar en event: inputen i rutan skickas till app.js
//app.js lägger in inputen i sin server request.
//express använder querystringen för att söka.

export default SearchInput;