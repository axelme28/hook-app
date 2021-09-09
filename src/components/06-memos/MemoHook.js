import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

import '../01-UseState/CounterApp.css'
import { UseCounter } from '../hooks/UseCounter'

export const MemoHook = () => {
    const [show, setshow] = useState(true)
    const {state, increment} = UseCounter(0)


    const procesoPesado = (iteraciones) => {
        for (let i = 0; i <iteraciones; i++) {
            console.log('Ahi vamos');
        }

        return `${iteraciones} Iteraciones Realizadas`
    }

    const memoProcesado = useMemo(() => procesoPesado(state), [state])

    return (
        <>
            <h1>MemoHook</h1>
            <h2> counter <small>{state}</small> </h2>
            <hr/>

            <p>{memoProcesado}</p>
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