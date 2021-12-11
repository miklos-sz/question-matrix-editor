import React, { useContext } from 'react'

import { MatrixContext } from '../../context/MatrixContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Adds a row/col to the matrix dynamically

const ButtonAddDimension = ({ dimension }) => {
  const [matrix, setMatrix] = useContext(MatrixContext)

  /* New row/col is added to our main state with a unique ID.
     The latest and highest id(number) is assigned to the corresponding rows/colsCurrentId
     variable of our global state (matrix).
     So every single new row/col will get the highest number in its ID, this way
     all elements remain unique.
  */

  const handleClick = e => {
    e.preventDefault()
    setMatrix({
      ...matrix,
      [dimension]: [...matrix[dimension], {
        id: matrix.label[dimension].short + matrix[dimension + 'CurrentId'],
        label: matrix.label[dimension].short + matrix[dimension + 'CurrentId']
      }],
      [dimension + 'CurrentId']: matrix[dimension + 'CurrentId'] + 1
    })
  }

  return (
    <button
      className={`add-dimension add-dimension--${dimension}`}
      onClick={e => handleClick(e)}
    >
      <FontAwesomeIcon icon='plus' />
    </button>
  )
}

export default ButtonAddDimension
