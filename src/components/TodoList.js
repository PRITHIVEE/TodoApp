import React, { useContext } from 'react';
import TodoItem from "./TodoItem";
import {todoContext} from './TodoContext';

const TodoList = () => {
    const [todoList, setTodoList] = useContext(todoContext);
    return (
        <div className='list-content'>
            {
                todoList.map( todo => <TodoItem key={todo.id} item={todo.item}/>)
            }
        </div>
    );
};

export default TodoList;