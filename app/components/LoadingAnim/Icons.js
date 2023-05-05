import React from 'react'

export const Icons = (props) => {
    const icon = `devicon-${props.of}-plain`
    return (
        <div><i className={icon}></i></div>
    )
}
