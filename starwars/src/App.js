import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import CharacterCard from './components/CharacterCard'
import {BASE_URL} from './constants/index'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterList, characterDataChange] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then(res => {
        characterDataChange(res.data.results);
      })
      .catch(err => {
        console.log(err);
      })

      return ()=>{}
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      
      <CharacterCard characterList={characterList}/>
    </div>
  );
}

export default App;
