import React from 'react'
import PropTypes from "prop-types"

const Icon = ({ name }) => {
    return (
        <i className={`icon-${name}`}></i>
    )
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Icon