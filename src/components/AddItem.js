import React, { useState } from 'react';
import ItemForm from './ItemForm';

const AddItem = () => {
    const [add, setAdd] = useState(true);
    return (
        <div className='add-item-container'>
            { add && <ItemForm/> }
            <div className='icon' title='Add Item' 
            onClick={()=> setAdd(!add)} 
            style={add ? {transform: 'rotateZ(45deg)'} : {transform: 'rotateZ(0deg)'}}>
                <div className="add-icon" />
                </div>
        </div>
    );
};

export default AddItem;