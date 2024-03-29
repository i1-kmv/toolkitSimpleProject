import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            if (!response.ok) {
                throw new Error('Server Error')
            }
            const data = await response.json()
            return data
        } catch (e) {
           return rejectWithValue(e.message)
        }
    }
)


export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null
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
    },
    extraReducers: {
        [fetchTodos.pending] : (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchTodos.fulfilled] : (state, action) => {
            state.status = 'resolved';
            state.todos = action.payload;
        },
        [fetchTodos.rejected] : (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        }
    }
})

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions
export default todoSlice.reducer