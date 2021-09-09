import { useState } from "react"

export const UseForm = (initialState = {}) => {

    const [values, setvalues] = useState(initialState)

    const handleInputChamge = ({target}) => {

        setvalues({
            ...values,
            [target.name]: target.value
        })
    }

    return [ values, handleInputChamge]
    
}
