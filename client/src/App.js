import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import './App.css';


function App() {

  const [apiState, setApiRequest] = useState(false);

  useEffect( () => fetch('http://localhost:9000/testAPI')
    .then(res => res.json())
    .then(res => setApiRequest(res))
    .catch(err => err), []);    

  if (apiState){
    console.log(apiState)
    return (
      <div>
        <div>
          {apiState.reading}
        </div>
        <div>
          {apiState.meaning}
        <div>
          <SearchInput />
        </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
      Loading data...
        <div> <SearchInput /></div>
      </div>
    );
  }
}

//skapa en knapp som låter användaren skriva in sökord och hämta rätt data. skicka datan via någon querystring? i GET-requesten.


export default App;
