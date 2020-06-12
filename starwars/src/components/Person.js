import React from 'react'
import styled from 'styled-components'

export default function Person (props){
    const {name} = props;

    return (
        <h1>{name}</h1>
    )
}