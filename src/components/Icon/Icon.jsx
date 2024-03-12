import React from 'react'
import "./icon.css"

const Icon = ({ name }) => {
    return (
        <i className={`icon-${name}`}></i>
    )
}

export default Icon