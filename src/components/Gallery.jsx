import Card from 'react-bootstrap/Card'
import IconHeart from './IconHeart'

const Gallery = ({ image }) => {
  return (
    <div className='col-md-4 mb-4'>
      <Card className='text-white'>
        <div className='gallery-container'>
          <Card.Img src={image.src.large} alt={image.alt} className='img-fluid' />
          <Card.ImgOverlay>
            <div className='text-container'>
              <p className='image-text'>{image.alt}</p>
            </div>
            <button className='transparent-button'>
              <IconHeart filled={image.liked} />
            </button>
          </Card.ImgOverlay>
        </div>
      </Card>
    </div>
  )
}

export default Gallery
