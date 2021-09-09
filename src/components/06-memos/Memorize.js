import React from 'react'
import { useState } from 'react'
import '../01-UseState/CounterApp.css'
import { UseCounter } from '../hooks/UseCounter'
import { Small } from './Small'


export const Memorize = () => {
    const [show, setshow] = useState(true)
    const {state, increment} = UseCounter(0)

    return (
        <>

            <h1><Small value = {state}/></h1>
            <hr/>

            <button
            className = "btn btn-primary mr-3"
            onClick = {increment}>
                increment
            </button>

            <button
            className = "btn btn-primary ml-3"
            onClick = {() => {
                setshow(!show)
            }}
            >
                Show/Hide  {JSON.stringify(show)}  
            </button>        
            
        </>
    )
}
