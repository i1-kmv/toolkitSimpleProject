import React from 'react';
import {TodoItem} from "./TodoItem";
import {useSelector} from "react-redux";



export const TodoList = () => {

    const todos = useSelector(state => state.todos.todos)

    return (
        <ul>
            {
                todos.map(t => {
                    return (
                        <TodoItem
                            key={t.id}
                            completed={t.completed} id={t.id}
                            text={t.text}
                           />
                    )
                })
            }
        </ul>
    );
};

