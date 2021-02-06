import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';


function ShowData () { 

  const setQueryString = (queryString) => {
    setQueryState(queryString)
  }

  const [queryStringState, setQueryState] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState("")

  useEffect( () => {
    if (!queryStringState) return;
    setIsLoading(true);
    fetch(`http://localhost:9000/testAPI/?word=${queryStringState}`) 
    .then(res => res.json())
    .then(data => {
      setFetchedData(data);
      // let regex = /①/gi;
      // console.log(data.meaning.replace(regex, 'TESTING 123'))
      setIsLoading(false);
    })
    .catch(err => err);
  }, [queryStringState]);    

  return  (
    <div>
        <SearchInput setQuery={setQueryString}/>
        {isLoading ? <div>Loading data...</div> : <div>{fetchedData.reading}{fetchedData.meaning}</div>} 
    </div>
  )

};

export default ShowData;