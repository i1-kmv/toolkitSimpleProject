import React, {useEffect, useState} from 'react'
import './App.css';
import {InputField} from "./components/InputField";
import {TodoList} from "./components/TodoList";
import {useDispatch, useSelector} from "react-redux";
import {fetchTodos} from "./store/todoSlice";

export const App = () => {

    const dispatch = useDispatch()

    const {status, error} = useSelector(state => state.todos)

    useEffect(() => {
        dispatch(fetchTodos())
    },[])

    return (
        <div className='App'>
            <InputField/>
            <TodoList />
        </div>
    );
}

export default App;
