import React from 'react'

function TextIntro(props) {
  return (
    <div className='intro'>{props.text} {props.children}</div>
  )
}

export default TextIntro