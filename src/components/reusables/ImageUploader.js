import React, { useContext } from 'react'

import { MatrixContext } from '../../context/MatrixContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ImageUploader = props => {
  const {
    dimension,
    id
  } = props

  const [matrix, setMatrix] = useContext(MatrixContext)

  // The function that manages the "upload" itself
  const uploadImage = e => {
    e.preventDefault()
    matrix[dimension][id].image = e.target.value
    setMatrix({ ...matrix })
  }

  /* hasImage() - This simple utility function helps us to decide:
      - whether we have uploaded image for the current dimension or not
      - what label should be shown as hint for the users
      - what icon do we have to render, according to the absence/presence of uploaded image */

  const hasImage = () => {
    return !!matrix[dimension][id].image
  }

  return (
    <>
      <form className='image-uploader'>
        <label
          title={!hasImage() ? 'Upload image' : 'Swap uploaded image'}
          htmlFor={`image-${dimension}-${id}`}
          className={!hasImage() ? '' : 'has-image'}
        >
          <FontAwesomeIcon icon={!hasImage() ? 'upload' : 'image'} />
        </label>
        <input
          onChange={e => uploadImage(e)}
          type='file'
          accept='image/*,.pdf'
          name='image'
          id={`image-${dimension}-${id}`}
        />
      </form>
    </>
  )
}

export default ImageUploader
