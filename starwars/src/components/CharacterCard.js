import React from 'react'
import styled from 'styled-components'
import Character from './Character'

const CharacterCardStyled = styled.div`
    

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
                if( key === 'birthday'){
                    bdays.push(props[index][key]);
                }
            })
        })

        return bdays;
    }

    return (
        <CharacterCardStyled>
            {
                mapCharacterNames(characterList).map(name => {
                    return <Character name={name} />
                })
            }
        </CharacterCardStyled>
    )
}