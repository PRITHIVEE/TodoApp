import React, { useState, useContext } from 'react';
import { todoContext } from './TodoContext';

const ItemForm = ({setTodo}) => {
    const [todoList, setTodoList] = useContext(todoContext); 
    const [item, setItem] = useState('');
    const updateTodo = () => {
        setTodoList([...todoList,{id:parseInt(Math.random()*1000),item:item}]);
        setItem('');
    };
    return (
        <div className='form-container'>
            <div className='input-container'>
                <label>Task:</label>
                <input type='text' className='item-input' value={item} onChange={ e => setItem(e.target.value)}/>
                <button className='add-button' onClick={updateTodo}>Add to List</button>
            </div>
        </div>
    );
};

export default ItemForm;