import React, { useContext, useRef } from 'react'

import { MatrixContext } from '../../context/MatrixContext'
import Editable from './Editable'

// Topic component is used as a Question topic for this Q/A matrix

const Topic = () => {
  const [matrix, setMatrix] = useContext(MatrixContext)
  const inputRef = useRef()

  return (
    <section className='topic'>
      <h2 className='topic__title'>
        <Editable
          text={matrix.topic}
          placeholder={matrix.topic}
          inputRef={inputRef}
          type='input'
        >
          <input
            ref={inputRef}
            type='text'
            name='task'
            placeholder={matrix.topic}
            defaultValue={matrix.topic}
            onChange={e => setMatrix({ ...matrix, topic: e.target.value })}
          />
        </Editable>
      </h2>
    </section>
  )
}

export default Topic
