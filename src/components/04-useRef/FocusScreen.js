import React from 'react'
import { useRef } from 'react'
import '../01-UseState/CounterApp.css'

export const FocusScreen = () => {

    const inputRef = useRef()
    //console.log(ref);
    const handleClick = () =>{
        inputRef.current.select()
        console.log(inputRef);
    }
    return (
        <div>
            <h1>FocuScreen</h1>
            <hr/>

            <input
                ref = {inputRef}
                className = "form-control"
                placeholder = "Su nombre"
            />

            <button
                className = "btn btn-outline-primary"
                onClick = {handleClick}
                >
                    Focus
                </button>
        </div>
    )
}
