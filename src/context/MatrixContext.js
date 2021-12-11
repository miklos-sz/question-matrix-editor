import React, { useState, createContext } from 'react'

import data from '../data/data.js'

export const MatrixContext = createContext()

export const MatrixProvider = props => {
  const [matrix, setMatrix] = useState(data)

  /* If data came from API endpoint, here we'd implement a fetch (async),
     a solution to deal with the load time (loader),
     and handle if the data is unavailable. (Not 200).
     But in this example I assume that we always have the initial data.
 */

  return (
    <MatrixContext.Provider value={[matrix, setMatrix]}>
      {props.children}
    </MatrixContext.Provider>
  )
}
