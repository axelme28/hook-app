import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

import '../01-UseState/CounterApp.css'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {
    const [counter, setCounter] = useState(0)

    const increment = useCallback( () => {
        setCounter(c => c+1);
    },[setCounter])

    return (
        <>
            <h1>CallBackHook: {counter}</h1>
            <hr/>
            <ShowIncrement increment = {increment}/>
        </>
    )
}
