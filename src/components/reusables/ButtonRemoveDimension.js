import React, { useContext } from 'react'

import { MatrixContext } from '../../context/MatrixContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonRemoveDimension = ({ dimension, id }) => {
  const [matrix, setMatrix] = useContext(MatrixContext)

  const handleClick = e => {
    e.preventDefault()
    setMatrix({ ...matrix, [dimension]: matrix[dimension].filter(item => item.id !== id) })
  }

  return (
    <button
      className={`remove-dimension remove-dimension--${dimension}`}
      onClick={e => handleClick(e)}
      title={`Delete ${matrix.label[dimension].long}`}
    >
      <FontAwesomeIcon icon='times-circle' />
    </button>
  )
}

export default ButtonRemoveDimension
