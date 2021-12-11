import React, { useContext, useRef } from 'react'

import { MatrixContext } from '../../context/MatrixContext'
import ButtonRemoveDimension from './ButtonRemoveDimension'
import ImageUploader from './ImageUploader'
import Editable from './Editable'

const DimensionHeader = ({ dimension, item, index }) => {
  const [matrix, setMatrix] = useContext(MatrixContext)
  const inputRef = useRef()

  // Sets the changed label for current row/col header0

  const handleChange = e => {
    e.preventDefault()
    matrix[dimension][index].label = e.target.value
    setMatrix({ ...matrix })
  }

  return (
    <div className={`matrix__cell matrix__cell--${dimension}`}>
      <ButtonRemoveDimension dimension={dimension} id={item.id} />
      <ImageUploader dimension={dimension} id={index} />
      <Editable
        text={item.label}
        placeholder={item.label}
        inputRef={inputRef}
        type='input'
      >
        <input
          ref={inputRef}
          type='text'
          name='task'
          placeholder={item.label}
          defaultValue={item.label}
          onChange={e => handleChange(e)}
        />
      </Editable>
    </div>
  )
}

export default DimensionHeader
