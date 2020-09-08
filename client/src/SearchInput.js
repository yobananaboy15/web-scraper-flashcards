import React, {useState} from 'react';

function SearchInput (props) {

    const [searchQuery, setSearchQuery] = useState(""); 
    
    return (
    <div>
        <input type='text' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} /> <button onClick={() => props.updateQueryString(searchQuery)}>Submit</button>
    </div>
    )
}

//skicka datan i inputfältet till show data. Hur skickar man data mellan syskon i react. Kan man göra searchinput till ett barn av display data?
//alternativt att state ligger i App.js och tar emot datan och skickar den till Show data.js.

export default SearchInput;