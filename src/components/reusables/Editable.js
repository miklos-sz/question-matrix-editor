import React, { useState, useEffect } from 'react'

const Editable = (props) => {
  const [isEditing, setEditing] = useState(false)

  const {
    inputRef,
    text,
    placeholder,
    children
  } = props

  useEffect(() => {
    if (inputRef && inputRef.current && isEditing === true) {
      inputRef.current.focus()
    }
  }, [isEditing, inputRef])

  const handleKeyDown = e => {
    const { key } = e
    const keys = ['Escape', 'Tab']
    const enterKey = 'Enter'
    const allKeys = [...keys, enterKey]

    if (keys.indexOf(key) > -1 || allKeys.indexOf(key) > -1) {
      setEditing(false)
    }
  }

  return (
    <span>
      {isEditing
        ? (
          <div
            onBlur={() => setEditing(false)}
            onKeyDown={e => handleKeyDown(e)}
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
