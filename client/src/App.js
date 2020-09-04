import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import ShowData from './ShowData';
import './App.css';


function App() {
  const [testState, updateTestState] = useState('');

  // function updateState (input) {
  //   updateTestState(input)
  // }

  return(
  <>
    <ShowData />
    <SearchInput kek={updateTestState}/>
    <div>{testState}</div>
  </>
  )
}

//skapa en knapp som låter användaren skriva in sökord och hämta rätt data. skicka datan via någon querystring? i GET-requesten.


export default App;
