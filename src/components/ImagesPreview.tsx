import React, { FC, useState } from 'react'

import './ImagesPreview.scss'

interface ImagesPreviewProps {
  images: string[]
}

const ImagesPreview: FC<ImagesPreviewProps> = (props) => {
  const { images } = props
  const [activeImage, setActiveImage] = useState(images[0])

  return (
    <div className="images-preview">
      <img className="images-preview-main" src={activeImage} alt="Main preview" />
      <div className="images-preview-thumbnails">
        {images.map((image, index) => (
          <button className="images-preview-thumbnail" key={image} onClick={() => setActiveImage(image)}>
            <img className="images-preview-image" src={image} alt={`preview ${index}`} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ImagesPreview
