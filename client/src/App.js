import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import ShowData from './ShowData';
import './App.css';


function App() {

<<<<<<< HEAD
  const updateText = (text) => {
    updateTestState(text)
=======
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
>>>>>>> 48bbf2a1e87f7840e0be1973730637983a3139eb
  }

  const [testState, updateTestState] = useState('hej');

  // function updateState (input) {
  //   updateTestState(input)
  // }

  return(
  <>
    <ShowData />
    <SearchInput kek={updateText}/>
    <div>{testState}</div>
  </>
  )
}

//skapa en knapp som låter användaren skriva in sökord och hämta rätt data. skicka datan via någon querystring? i GET-requesten.


export default App;
