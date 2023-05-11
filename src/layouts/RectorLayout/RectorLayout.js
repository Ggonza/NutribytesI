import React from 'react'
import "./RectorLayout.css"

export function RectorLayout(props) {
    const {children} = props;
    return(
        <div>
            <p>RectorLayout</p>
            {children}
        </div>
    )
}