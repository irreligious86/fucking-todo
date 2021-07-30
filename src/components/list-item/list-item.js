import React from "react";
import './list-item.css';


const ListItem = (props) => {

    let myStyle = "todo-list-item";
    if (props.done) {
        myStyle += ' done';
    }

    return <li className={myStyle}>
        <span className=''>
            {props.title}
        </span>
        <div className='btn-group'>
            <button
                type='button'
                className='btn btn-outline-success'
                onClick={ () => props.clickHandlerDone(props.id) }>
                Done
            </button>
            <button
                type='button'
                className='btn btn-outline-secondary'
                onClick={ () => props.clickHandlerEdit(props.id) }>
                Edit
            </button>
            <button
                type='button'
                className='btn btn-outline-danger'
                onClick={ () => props.clickHandlerDelete(props.id) }>
                Delete
            </button>
        </div>
    </li>
};

export default ListItem;