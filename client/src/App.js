import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import './App.css';


function App() {

  const [apiState, setApiRequest] = useState(false);

  useEffect( () => fetch('http://localhost:9000/testAPI')
  .then(res => res.text())
  .then(res => setApiRequest(res))
  .catch(err => err), []);    

  if (apiState){
    return apiState
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
