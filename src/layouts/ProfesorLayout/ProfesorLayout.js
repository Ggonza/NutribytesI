import React from 'react'
import "./ProfesorLayout.css"

export function ProfesorLayout(props) {
    const {children} = props;
    return(
        <div>
            <p>ProfesorLayout</p>
            {children}
        </div>
    )
}