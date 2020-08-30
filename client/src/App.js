import React, { useState } from 'react';
import './App.css';

function App() {

  const [state, setState] = useState({apiReponse: ""});
  // console.log(state);

  if (!state.apiReponse){  
    fetch('http://localhost:9000/testAPI')
      .then(res => res.text())
      .then(res => setState({apiReponse: res}))
      .catch(err => err);
  };  
  
  console.log(state.apiReponse.meaning);

  return (
    <p>
      hej
    </p>
  );
}

export default App;
