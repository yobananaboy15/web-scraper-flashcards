import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';

function ShowData () { 

  const setQueryString = (queryString) => {
    setQueryState(queryString)
  }

  const [queryStringState, setQueryState] = useState("")
  const [apiState, setApiRequest] = useState(false);

  useEffect( () => fetch('http://localhost:9000/testAPI')
    .then(res => res.json())
    .then(res => setApiRequest(res))
    .catch(err => err), []);    

  return  (
    <div>
        {apiState ? <div>{apiState.reading}{apiState.meaning}</div> : <div>Loading data...</div>}
        <SearchInput setQuery={setQueryString}/> 
        {queryStringState}
    </div>
  )

};

//behöver eventuellt nytt state för querystringen
//express använder querystringen för att söka.

export default ShowData;