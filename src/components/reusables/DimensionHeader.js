import React, { useContext, useRef } from 'react'

import { MatrixContext } from '../../context/MatrixContext'
import ImageUploader from './ImageUploader'
import Editable from './Editable'
import ButtonAddRemoveDimension from './ButtonAddRemoveDimension'

const DimensionHeader = ({ dimension, item, index }) => {
  const [matrix, setMatrix] = useContext(MatrixContext)
  const inputRef = useRef(null)

  // Sets the changed label for current row/col header0

  const handleChange = e => {
    e.preventDefault()
    const newLabelText = matrix[dimension][index].label = e.target.value
    setMatrix({ ...matrix, newLabelText})
  }

  return (
    <div className={`matrix__cell matrix__cell--${dimension}`}>
      <ButtonAddRemoveDimension action='remove' dimension={dimension} id={item.id} />
      <ImageUploader dimension={dimension} id={index} />
      <Editable
        text={item.label}
        placeholder={item.label}
        inputRef={inputRef}
      >
        <input
          ref={inputRef}
          name='dimensionHeader'
          placeholder={item.label}
          defaultValue={item.label}
          onChange={e => handleChange(e)}
        />
      </Editable>
    </div>
  )
}

export default DimensionHeader
