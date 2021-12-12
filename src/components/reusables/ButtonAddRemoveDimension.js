import React, { useContext } from 'react'

import { MatrixContext } from '../../context/MatrixContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Add or remove a row/col to/from the matrix dynamically
  What does this props mean?
  - action = 'add' or 'remove'
  - dimension = 'rows' or 'cols'
  - id is needed only on removal of a dimension
*/

const ButtonAddRemoveDimension = ({ action, dimension, id }) => {
  const [matrix, setMatrix] = useContext(MatrixContext)

  /* New row/col is added to our main state with a unique ID.
   The latest and highest id(number) is assigned to the corresponding rows/colsCurrentId
   variable of our global state (matrix).
   So every single new row/col will get the highest number in its ID, this way
   all elements remain unique.
*/

  const addDimension = () => {
    setMatrix({
      ...matrix,
      [dimension]: [...matrix[dimension], {
        id: matrix.label[dimension].short + matrix[dimension + 'CurrentId'],
        label: matrix.label[dimension].short + matrix[dimension + 'CurrentId']
      }],
      [dimension + 'CurrentId']: matrix[dimension + 'CurrentId'] + 1
    })
  }

  const removeDimension = () => {
    setMatrix({ ...matrix, [dimension]: matrix[dimension].filter(item => item.id !== id) })
  }

  const handleClick = e => {
    e.preventDefault()
    action === 'add' ? addDimension() : removeDimension()
  }

  return (
    <button
      className={`${action}-dimension ${action}-dimension--${dimension}`}
      onClick={e => handleClick(e)}
      title={`${action} ${matrix.label[dimension].long}`}
    >
      <FontAwesomeIcon icon={action === 'add' ? 'plus' : 'times-circle'} />
    </button>
  )
}

export default ButtonAddRemoveDimension
