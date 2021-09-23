const initialState = [{
    id: 1,
    todo: 'comprar pan',
    done: false
}]

const todoReducer = (state = initialState,action) => {
    if ( action?.type === 'agregar'){
        return [...state, action.payload]
    }

    return state
}

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const todoAction = {
    type: 'agregar',
    payload: newTodo
}

let todos = todoReducer()

todos = todoReducer(todos,todoAction)

console.log(todos);
