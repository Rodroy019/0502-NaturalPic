import Card from 'react-bootstrap/Card'
import IconHeart from './IconHeart'
import { useContext } from 'react'
import { LikeMe } from '../context/LikeMe'

const Gallery = ({ image }) => {
  const { images, setImages } = useContext(LikeMe)

  const addAndRemove = (id) => {
    const newImages = images.map(image => {
      if (image.id === id) {
        return {
          ...image,
          liked: !image.liked
        }
      }
      return image
    })
    setImages(newImages)
  }

  return (
    <div className='col-md-4 mb-4'>
      <Card className='text-white'>
        <div className='gallery-container'>
          <Card.Img src={image.src.large} alt={image.alt} className='img-fluid' />
          <Card.ImgOverlay>
            <div className='text-container'>
              <p className='image-text'>{image.alt}</p>
            </div>
            <button className='transparent-button' onClick={() => addAndRemove(image.id)}>
              <IconHeart filled={image.liked} />
            </button>
          </Card.ImgOverlay>
        </div>
      </Card>
    </div>
  )
}

export default Gallery
