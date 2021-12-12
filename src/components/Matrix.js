import React, { useContext } from 'react'

import { MatrixContext } from '../context/MatrixContext'
import DimensionHeader from './reusables/DimensionHeader'
import Options from './reusables/Options'

// FirstCell is tht 0th cell of the matrix, it provides call to action in case of zero rows and/or cols

const FirstCell = () => {
  const [matrix] = useContext(MatrixContext)

  return (
    <div className='matrix__cell matrix__cell--rows text-right'>
      {!matrix.rows.length || !matrix.cols.length
        ? <span>Add a {!matrix.rows.length ? matrix.label.rows.long : matrix.label.cols.long}.</span>
        : <>&nbsp;</>}
    </div>
  )
}

const Matrix = () => {
  const [matrix] = useContext(MatrixContext)

  // The only programmatic styling in the app: it controls grid system.
  const gridStyle = { gridTemplateColumns: `repeat(${matrix.cols.length + 1}, 1fr)` }

  return (
    <section className='matrix__grid' style={gridStyle}>
      <FirstCell />
      {matrix.cols.map((col, index) => {
        return <DimensionHeader key={col.id} dimension='cols' item={col} index={index} />
      })}
      {matrix.rows.map((row, index) => {
        return (
          <React.Fragment key={row.id}>
            <DimensionHeader dimension='rows' item={row} index={index} />
            <Options rowIndex={index} />
          </React.Fragment>
        )
      })}
    </section>
  )
}

export default Matrix
