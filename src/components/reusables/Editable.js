import React, { useState, useEffect } from 'react'

const Editable = (props) => {
  const [isEditing, setEditing] = useState(false)

  const {
    inputRef,
    text,
    type,
    placeholder,
    children
  } = props

  useEffect(() => {
    if (inputRef && inputRef.current && isEditing === true) {
      inputRef.current.focus()
    }
  }, [isEditing, inputRef])

  const handleKeyDown = (event, type) => {
    const { key } = event
    const keys = ['Escape', 'Tab']
    const enterKey = 'Enter'
    const allKeys = [...keys, enterKey]

    if (
      (type === 'textarea' && keys.indexOf(key) > -1) ||
      (type !== 'textarea' && allKeys.indexOf(key) > -1)
    ) {
      setEditing(false)
    }
  }

  return (
    <span {...props}>
      {isEditing
        ? (
          <div
            onBlur={() => setEditing(false)}
            onKeyDown={e => handleKeyDown(e, type)}
            className='editable__label'
          >
            {children}
          </div>
          )
        : (
          <div
            onClick={() => setEditing(true)}
            className='editable__label'
          >
            <span>
              {text || placeholder || 'Edit this text'}
            </span>
          </div>
          )}
    </span>
  )
}

export default Editable
