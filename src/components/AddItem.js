import React, { useState, useEffect, useRef } from 'react';
import ItemForm from './ItemForm';

const AddItem = () => {
    const [add, setAdd] = useState(false);
    const addIconRef = useRef();
    useEffect(()=>{
        addIconRef.current.click();
    }, []);
    return (
        <div className='add-item-container'>
            { add && <ItemForm/> }
            <div className='icon' title='Add Item' ref={addIconRef}
            onClick={()=> setAdd(!add)} 
            style={add ? {transform: 'rotateZ(45deg)'} : {transform: 'rotateZ(0deg)'}}>
                <div className="add-icon" />
                </div>
        </div>
    );
};

export default AddItem;