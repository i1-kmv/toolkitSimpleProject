import React from 'react';
import {useDispatch} from "react-redux";
import {removeTodo, toggleTodoComplete} from "../store/todoSlice";

export const TodoItem = ({completed, id, title}) => {


    const dispatch = useDispatch();

    const onCompletedClick = (id) => {
        dispatch(toggleTodoComplete({id}))
    }

    const removeTodoHandler = (id) => {
        dispatch(removeTodo({id}))
    }

    return (
        <li>
            <input type="checkbox" checked={completed} onChange={() => onCompletedClick(id)}/>
            <span>{title}</span>
            <span className='delete' onClick={() => removeTodoHandler(id) }>&times;</span>
        </li>
    );
};

