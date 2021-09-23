import React from 'react'
import { UseForm } from '../hooks/UseForm'

export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChamge, reset] =UseForm({
        description: ''
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (description.trim().length <=1){
            return
        }else{
            const newTodo = {
                id: new Date().getTime(),
                desc: description,
                done: false
            } 
            handleAddTodo(newTodo)
            reset()        
    }
    }

    return (
        <>
            <h4>Add Todo</h4>
                    <hr/>

                    <form onSubmit = {handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <input 
                            type="text" 
                            name = "description"
                            placeholder = "Aprender ..."
                            autoComplete = "off"
                            className="form-control"
                            value = {description}
                            onChange = {handleInputChamge}
                            ></input>
                        </div>
                      
                        <button type = "submit" className="btn btn-primary">Add</button>
                    </form>   
        </>
    )
}
