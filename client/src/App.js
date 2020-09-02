import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import './App.css';


function App() {

  const [apiState, setApiRequest] = useState(false); //flytta ut den här funktionaliteten
  const [queryState, setQuery] = useState('');

  useEffect( () => fetch('http://localhost:9000/testAPI') //lägg till query param
  .then(res => res.json())
  .then(res => setApiRequest(res))
  .catch(err => err), []);    

  if (apiState){
    return <div>
      {apiState.reading}
      {apiState.meaning}
      <SearchInput query={queryState}/>
    </div>
  } else {
    return (
      <p>
      Loading data...
      </p>
    );
  }
}

//skapa en knapp som låter användaren skriva in sökord och hämta rätt data. skicka datan via någon parameter? i GET-requesten.


export default App;
