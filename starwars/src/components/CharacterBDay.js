import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

export default function CharacterBDay(props){
    const {bday} = props

    const StyledBday = styled.p`
       font-size: 1.5rem;
       
    `
    return(
        <StyledBday>{bday}</StyledBday>
    )
}