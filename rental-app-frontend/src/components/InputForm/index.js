import React from 'react';

export default function InputForm({
    onChange,
    type,
    placeholder,
    id,
    name,
    value,
    style,
    checked,
    rest,
}) {
    return (
        <input
            {...rest}
            id={id}
            type={type}
            name={name}
            style={style}
            value={value}
            checked={checked}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}
