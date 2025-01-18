import {useEffect, useState} from "react";

import {ITodo} from "../models/ITodo.ts";
import {Todo} from "./todo/Todo.tsx";

export const Todos = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(()=> {
        fetch('https://dummyjson.com/todos')
            .then(value => value.json())
            .then(({todos})=> {
                console.log(todos);
                setTodos(todos);
            });
    }, []);
    return (
        <>
            {
                todos.map(todo => <Todo key={todo.id} item={todo}/>)
            }
        </>
    );
};