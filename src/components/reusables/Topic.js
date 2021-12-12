import React, { useContext, useRef } from 'react'

import { MatrixContext } from '../../context/MatrixContext'
import Editable from './Editable'

// Topic component is used as a Question topic for this Q/A matrix

const Topic = () => {
  const [matrix, setMatrix] = useContext(MatrixContext)
  const inputRef = useRef(null)

  const handleChange = e => {
    e.preventDefault()
    setMatrix({ ...matrix, topic: e.target.value })
  }

  return (
    <section className='topic'>
      <h2 className='topic__title'>
        <Editable
          text={matrix.topic}
          placeholder={matrix.topic}
          inputRef={inputRef}
        >
          <input
            ref={inputRef}
            name='topic'
            placeholder={matrix.topic}
            defaultValue={matrix.topic}
            onChange={e => handleChange(e)}
          />
        </Editable>
      </h2>
    </section>
  )
}

export default Topic
