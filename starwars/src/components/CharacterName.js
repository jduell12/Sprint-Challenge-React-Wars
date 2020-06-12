import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

export default function CharacterName(props){
    const {name} = props;

    const StyledName = styled.h1`
        text-align:left;
    `

    return (
        <StyledName>{name}</StyledName>
    )
}