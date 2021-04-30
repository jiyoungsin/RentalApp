import React from 'react'
import InputForm from '../../components/InputForm';


export default function TodoItem({name, ...rest}) {
    console.log(name);
    const handleChange =()=>{

    }
    return (
        <div {...rest}>
            <InputForm onChange={handleChange} type='checkbox' id='id' checked='checked'/>
            {name}
        </div>
    )
}
