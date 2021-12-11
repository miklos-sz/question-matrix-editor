import React, { useContext } from 'react'

import { MatrixContext } from '../context/MatrixContext'
import { Container } from 'react-bootstrap'

const Summary = () => {
  const [matrix] = useContext(MatrixContext)

  const getNumberOfImagesUploaded = () => {
    return (
      <>
        {
          matrix.rows.filter(row => row.image).length +
          matrix.cols.filter(col => col.image).length
        }
      </>
    )
  }

  const getLongestLabel = dimension => {
    return matrix[dimension]
      .map(e => e.label.length)
      .sort((a, b) => b - a)[0]
  }

  return (
    <section className='summary d-flex flex-column'>
      <Container>
        <h2 className='summary__title'>Summary</h2>
        <ul>
          <li>Number of rows: <span>{matrix.rows.length}</span></li>
          <li>Number of columns: <span>{matrix.cols.length}</span></li>
          {/* The rows below are rendered only in the presence of the corresponding data, otherwise they are hidden */}
          {(matrix.rows.length || matrix.cols.length)
            ? <li> Number of images uploaded: <span>{getNumberOfImagesUploaded()}</span></li>
            : <></>}
          {isFinite(getLongestLabel('rows')) &&
            <li>Longest row label: <span>{getLongestLabel('rows')}</span></li>}
          {isFinite(getLongestLabel('cols')) &&
            <li> Longest column label: <span>{getLongestLabel('cols')}</span></li>}
        </ul>
      </Container>
    </section>
  )
}

export default Summary
