import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../store/todoSlice";

export  const InputField = () => {

    const dispatch = useDispatch()

    const [text, setText] = useState('')

    const handleSubmit = () => {
        dispatch(addTodo({text}))
        setText('')
    }

    return (
        <div>
            <label htmlFor="">
                <input value={text} onChange={(e) => setText(e.target.value)}/>
                <button onClick={handleSubmit}> Add Todo </button>
            </label>
        </div>
    );
};

