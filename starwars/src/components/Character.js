import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {BASE_URL} from '../constants/index'

const CharacterStyled = styled.div`
    border-style: solid;
    border-color: lightgreen;
    color: white;
    margin: 5%;
`

export default function Character (props){
    const {name} = props;
    
    return (
        <CharacterStyled>
            <h1>{name}</h1>
        </CharacterStyled>
    )
}