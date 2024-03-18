import React from 'react'
import PropTypes from "prop-types"
import "./icon.css"

const Icon = ({ name }) => {
    return (
        <i className={`icon-${name}`}></i>
    )
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Icon