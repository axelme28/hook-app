import React from 'react'
import { UseForm } from '../hooks/UseForm';
import './SimpleForm.css'
export const FormWithCustomHook = () => {

    const [formValues, handleInputChamge] = UseForm({
        name :'',
        email:'',
        password:''
    })

    const {name,email,password} = formValues;
        
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues);
    }
    return (
        < div className = "margin:1rem">
            <div className = "title">
            <h1>FormWithCustomHook</h1>
            </div>
            <form className= "form" onSubmit = {handleSubmit}>
                <div className = "form-grup mb-3">
                    <label className = "form-label">Name</label>
                    <input type = "text"
                        name = "name"
                        className = "form-control"
                        placeholder = "tu nombre"
                        autoComplete = "off"
                        value = {name}
                        onChange = {handleInputChamge}/>
                </div>
                
                
                <div className = "form-grup mb-3">
                    <label>Email</label>
                    <input type = "text"
                        name = "email"
                        className = "form-control"
                        placeholder = "email@email.com"
                        autoComplete = "off"
                        value = {email}
                        onChange = {handleInputChamge}/>
                </div>

                <div className = "form-grup mb-3">
                    <label>Password</label>
                    <input type = "password"
                        name = "password"
                        className = "form-control"
                        placeholder = "******"
                        autoComplete = "off"
                        value = {password}
                        onChange = {handleInputChamge}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            
        </div>
    )
}
