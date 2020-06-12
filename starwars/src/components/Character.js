import React from 'react'
import styled from 'styled-components'
import CharacterCard from './CharacterCard'

export default function Character(props){
    const {characterList} = props

    const mapCharacters = (props) => {

        let names = [];

        Object.values(props).map((value, index) => {
            let keys = Object.keys(props[index]).map(key =>{
                if(key === 'name'){
                    names.push(props[index][key])
                }
            })
        })

        return names;
    }

    return (
        <div>
            <CharacterCard nameList = {mapCharacters(characterList)} />
        </div>
    )
}
