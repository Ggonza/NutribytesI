import React from 'react'
import "./AdminLayout.css"

export function AdminLayout(props) {
    const {children} = props;
    return(
        <div>
            <p>AdminLayout</p>
            {children}
        </div>
    )
}