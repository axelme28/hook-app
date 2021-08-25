import React from 'react'
import { useEffect,useState } from 'react';
import './SimpleForm.css'
export const SimpleForm = () => {

    const [form, setform] = useState({
        name :'',
        email:''
    })

    const {name,email} = form;

    useEffect(() => {
        console.log('hey!');
    },[])
        
    const handleInputChamge = ({target}) =>{
        setform({
            ...form,
            [target.name]:target.value
        });   
    }

    
    return (
        < div className = "margin:1rem">
            <div className = "title">
            <h1>UseEffect</h1>
            </div>
            <form className= "form">
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
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
