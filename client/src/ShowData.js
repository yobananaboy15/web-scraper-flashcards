import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';

function ShowData () { 

  //skicka med en parameter som är == quer
  //lägger till kommentar för att testa commit genom vs code

  const setQueryString = (queryString) => {
    setQueryState(queryString)
  }

  const [queryStringState, setQueryState] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState("")

  useEffect( () => {
    setIsLoading(true);
    fetch('http://localhost:9000/testAPI') //`http://localhost:9000/testAPI=${queryStringState}`
    .then(res => res.json())
    .then(data => {
      setFetchedData(data);
      setIsLoading(false);
    })
    .catch(err => err);
  }, [queryStringState]);    

  return  (
    <div>
        {isLoading ? <div>Loading data...</div> : <div>{fetchedData.reading}{fetchedData.meaning}</div>}
        <SearchInput setQuery={setQueryString}/> 
        {queryStringState}
    </div>
  )

};

//behöver eventuellt nytt state för querystringen
//express använder querystringen för att söka.

export default ShowData;