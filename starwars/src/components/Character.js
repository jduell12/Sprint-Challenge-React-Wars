import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {BASE_URL} from '../constants/index'

const CharacterStyled = styled.div`
    border-style: solid;
    border-color: lightgreen;
    color: white;
    margin: 2%;
`

export default function Character (props){
    const {name} = props;
    let characterIndex = -1;

    useEffect(() => {
        axios.get(`${BASE_URL}`)
        .then(res => {
            let result  = res.data.results ;

            Object.values(result).map((value, index) => {
                console.log(index);
                Object.values(result[index]).map((val, i) => {
                    if(val === name){
                        characterIndex = index;
                    }
                })
            })
            
        })
        .catch(err => {
            console.log(err);
        })

        return ()=>{}
    }, []);


    const getBday = () => {

    }

    return (
        
        <CharacterStyled>
            <h1>{name}</h1>
            {/* <p>{getBday(characterIndex)}</p> */}
        </CharacterStyled>
    )
}