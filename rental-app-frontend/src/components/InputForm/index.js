import React from 'react'

export default function InputForm({onChange, type, placeholder, id, name, rest}) {
    return (
        <input {...rest}        
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={onChange}
        />
    )
}
