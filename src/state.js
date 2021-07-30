import { v4 as uuidv4 } from 'uuid';

const state = [
    {
        id: uuidv4(),
        title: 'one',
        done: false,
        editMode: false
    },
    {
        id: uuidv4(),
        title: 'two',
        done: false,
        editMode: false
    },
    {
        id: uuidv4(),
        title: 'three',
        done: false,
        editMode: false
    },
    {
        id: uuidv4(),
        title: 'four',
        done: false,
        editMode: false
    }
];

export default state;