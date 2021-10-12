import {createSlice} from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action){
            state.todos.push(
                {
                    id: new Date().toString(),
                    text: action.payload.text,
                    completed: false
                }
            )
        },
        removeTodo(state, action){
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleTodoComplete(state, action){
            state.todos = state.todos.map(t => {
                if (t.id !== action.payload.id) return t
                return {
                    ...t,
                    completed: !t.completed
                }
            })
        }
    }
})

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions
export default todoSlice.reducer