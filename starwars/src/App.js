import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import CharacterCard from './components/CharacterCard'
import {BASE_URL} from './constants/index'
import styled from 'styled-components'

const AppStyled = styled.div`
  background-image: url('https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
  margin: 0 3%;
  padding: 3%;
`

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
    <AppStyled className="App">
      <h1 className="Header">Characters</h1>
      <CharacterCard characterList={characterList}/>
    </AppStyled>
  );
}

export default App;
