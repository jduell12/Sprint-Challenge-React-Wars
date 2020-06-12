import React from 'react'
import styled from 'styled-components'
import Character from './Character'

const CharacterCardStyled = styled.div`
    padding: 3% 10%;

`

const StyledH1 = styled.h1`
    color: white;
`

export default function CharacterCard(props){
    const {characterList} = props;

    const mapCharacterNames = props => {
        let names = [];

        Object.values(props).map((values, index) => {
            Object.keys(props[index]).map(key => {
                if( key === 'name'){
                    names.push(props[index][key]);
                }
            })
        })
        return names;
    }

    const mapCharacterBdays = props => {
        let bdays = [];

        Object.values(props).map((values, index) => {
            Object.keys(props[index]).map(key => {
                if( key === 'birth_year'){
                    bdays.push(props[index][key]);
                }
            })
        })
        return bdays;
    }

    return (
        <CharacterCardStyled>
            <StyledH1>Characters</StyledH1>
            {
                mapCharacterNames(characterList).map((name, index) => {
                    return <Character name={name} bday ={mapCharacterBdays(characterList)[index]}/>
                })
            }
        </CharacterCardStyled>
    )
}