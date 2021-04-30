import React from 'react'
import {todoData} from '../../payload';
import TodoItem from './TodoItem';

export default function Todo() {
    console.log(todoData);
    return (
        <div>
            {todoData.map((i)=>(
                <TodoItem key={i.id} name={i.name} checked={i.checked}/>
            ))}
        </div>
    )
}
