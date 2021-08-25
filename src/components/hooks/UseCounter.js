import { useState } from "react";

export const UseCounter = (initialState = 0) => {
    const [state, setstate] = useState(initialState);

    const increment = (factor = 1) =>{
        setstate(state + factor)
    }

    const decrement = (factor = 1) => {
        setstate(state - 1)
    }

    const reset = () =>{
        setstate(initialState)
    }

    return {
        state,
        increment,
        decrement,
        reset
    }
}
