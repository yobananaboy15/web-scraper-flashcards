import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import ShowData from './ShowData';
import './App.css';


function App() {

  const updateQueryString = (text) => {
    updateQueryState(text)
  };

  const [queryState, updateQueryState] = useState('hej');

  return(
  <>
    <ShowData />
    <SearchInput updateQueryString={updateQueryString}/>
    <div>{queryState}</div>
  </>
  )
}

export default App;
