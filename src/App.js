import React, {useState} from 'react'
import './App.css';
import {InputField} from "./components/InputField";
import {TodoList} from "./components/TodoList";
import {useSelector} from "react-redux";

export const App = () => {


    const [text, setText] = useState('')



    return (
        <div className='App'>
            <InputField/>
            <TodoList />
        </div>
    );
}

export default App;
