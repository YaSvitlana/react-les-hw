import {useEffect, useState} from "react";

import {ITodo} from "../models/ITodo.ts";
import {Todo} from "./todo/Todo.tsx";

export const Todos = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then((iTodos: ITodo[])=> {
                setTodos(iTodos)
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


