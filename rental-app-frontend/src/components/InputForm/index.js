import React from 'react'

export default function InputForm({onChange, type, placeholder, id, name, value, style, rest}) {
    return (
        <input {...rest}
        style={style}
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        />
    )
}
