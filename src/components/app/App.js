import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import './App.css';
import ListItem from "../list-item/list-item";
import state from "../../state";
import {logDOM} from "@testing-library/react";

function App() {

    const inviteMsg = 'Enter your text here';

    const [addInputValue, setAddInputValue] = useState(inviteMsg);
    const [todos, setTodos] = useState(state);
    const [editMode, setEditMode] = useState(false);
    const [editInputValue, setEditInputValue] = useState('Edit task:');

    const createTodo = () => {
        if (addInputValue !== inviteMsg && addInputValue !== '') {
            setTodos([...todos, {id: uuidv4(), title: addInputValue, done: false, editMode: false}]);
            setAddInputValue(inviteMsg);
        };
    };

    const clickHandlerDone = (id) => {
        setTodos(prev => prev.map(
            (item) => {
                if (item.id === id) {
                    return {
                        ...item, done: !item.done
                    }
                }
                return item;
            }
        ))
    }

    const clickHandlerEdit = (id) => {
        setTodos(todos => todos.map(
                (item) => {
                    if (item.id === id) {
                        return {
                            ...item, editMode: !item.editMode
                        }
                    }
                    return item;
                }
            )
        );
        console.log(todos);
    }

    const clickHandlerDelete = (id) => {
        setTodos(prev => prev.filter(item => item.id !== id))
    }

    const editInputChanger = (id) => {
        setEditInputValue( 'qwertasdfg' )
    }

    const listInner = todos.map(item => {
        return <ListItem
            key={item.id}
            title={item.title}
            done={item.done}
            editMode={item.editMode}
            editInputChanger={item.editInputChanger}
            id={item.id}
            clickHandlerDone={clickHandlerDone}
            clickHandlerEdit={clickHandlerEdit}
            clickHandlerDelete={clickHandlerDelete}
        />
    });

    return (
        <div className="App">
            <h1>My fucking TODO</h1>
            <ul className="list-group">
                {listInner}
            </ul>
            <p>
                You can add next todo
            </p>
            <div className="add-block">
                <input
                    className='add-input'
                    type="text"
                    onFocus={() => setAddInputValue('')}
                    onChange={e => setAddInputValue(e.target.value)}
                    value={addInputValue}
                />
                <button
                    type='button'
                    onClick={createTodo}
                    className='btn btn-outline-primary'
                >Add
                </button>
            </div>
        </div>
    );
}

export default App;
