import React from 'react'
import styled from 'styled-components'

export default function CharacterCard(props){
    const {nameList} = props;

    return (
        <div>
            <p>{nameList[0]}</p>
        </div>
    )
}