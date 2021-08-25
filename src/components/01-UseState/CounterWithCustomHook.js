import React from 'react'
import { UseCounter } from '../hooks/UseCounter'
import './CounterApp.css'

export const CounterWithCustomHook = () => {

    const {state,increment,decrement,reset} = UseCounter(0)
    
    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr/>
            <div className = "buttons">
                <button className="btn btn-primary" onClick  = {() => {increment(2)}}> +1</button>
                <button className = "btn btn-warning" onClick = {reset}>Reset</button>
                <button className="btn btn-danger" onClick = {() => {decrement(2)}} > -1</button>
            </div>
            
        </>
    )
}
