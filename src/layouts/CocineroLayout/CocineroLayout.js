import React from 'react'
import "./CocineroLayout.css"

export function CocineroLayout(props) {
    const {children} = props;
    return(
        <div>
            <p>CocineroLayout</p>
            {children}
        </div>
    )
}