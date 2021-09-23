import React from 'react'
import { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './styles.css'
import { useEffect } from 'react'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'



const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || []
}
export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

   

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])

    const handleToggle = (todoId) =>{
        dispatch({
            type: 'done',
            payload: todoId
        })
    }

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action)
    }

    

    const handleAddTodo = (desc) => {
        dispatch({
            type: 'add',
            payload: desc
        })
    }

    return (
        <>
            <h1>TodoApp({todos.length})</h1>
            <hr/>

            <div className = "row">
                <div className = "col-7">
                    <TodoList 
                    todos = {todos}
                    handleDelete = {handleDelete}
                    handleToggle =  {handleToggle}/>
                </div>

                <div className = "col-5">
                    <TodoAdd 
                    handleAddTodo = {handleAddTodo}/>
                </div>
            </div>

        </>
    )
}
