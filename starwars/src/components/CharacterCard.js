import React from 'react'
import styled from 'styled-components'
import Character from './Character'

export default function CharacterCard(props){
    const {characterList} = props;

    const mapCharacterNames = (props) => {
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

    return (
        <div>
            <Character nameList = {mapCharacterNames(characterList)}/>
        </div>
    )
}