import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import CharacterName from './CharacterName'
import CharacterBDay from './CharacterBDay'

const CharacterStyled = styled.div`
    border-style: solid;
    border-color: lightgreen;
    color: white;
    margin: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export default function Character (props){
    const {name, bday} = props;
    
    return (
        <CharacterStyled>
            <CharacterName name={name} />
            <CharacterBDay bday={bday} />
        </CharacterStyled>
    )
}