import React, { useContext } from 'react'

import { MatrixContext } from '../../context/MatrixContext'

/*  All the radio buttons are rendered together in this component,
    iterating through all of them. The radio button as 'Option'
    component should be extracted to a single component,
    still it's unnecessary yet.
*/

const Options = ({ rowIndex }) => {
  const [matrix] = useContext(MatrixContext)

  return (
    <>
      {matrix.cols.map((col, index) => {
        return (
          <div key={col.id} className='matrix__cell matrix__cell--option'>
            <input type='radio' name={`option-row-${rowIndex + 1}`} id={`row-${rowIndex + 1}-col${index + 1}`} />
          </div>
        )
      })}
    </>
  )
}

export default Options
