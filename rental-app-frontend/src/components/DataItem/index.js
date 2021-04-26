import React from 'react'

export default function DataItem( {key, name, onClick, clicked, rest}) {
    return (
        <div
            // key={key}
            {...rest}
            style={{
                backgroundColor: "black",
                width: "200px",
                height: "150px",
                color: "white",
                padding: "20px",
                margin: "20px",
            }}
            onClick={onClick} >
            <h3>{name}</h3>    
        </div>
    )
}
