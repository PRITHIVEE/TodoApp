import React from 'react';

const TodoItem = ({item}) => {
    return (
        <div className='item-container'>
            {item}
        </div>
    );
};

export default TodoItem;