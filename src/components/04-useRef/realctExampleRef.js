import React from 'react'
import '../01-UseState/CounterApp.css'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
import { useState } from 'react'


export const RealtExampleRef = () => {
    const [show, setshow] = useState(false)

    return (
        <div>
            <h1>RealtExampleRef</h1>
            <hr/>

            {show && <MultipleCustomHooks/>}

            <button
                className = "btn btn-danger mt-5"
                onClick = {() => {
                    setshow(!show)
                }}
            >
                Show/Hide
            </button>

        </div>
    )
}
