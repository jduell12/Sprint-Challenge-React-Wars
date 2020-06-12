import React from 'react'
import styled from 'styled-components'
import Person from './Person'

export default function Character(props){
    const {nameList} = props;


    return (
        <div>
            {nameList.map(name => {
                return <Person name={name} />
            })}
        </div>
    )
}