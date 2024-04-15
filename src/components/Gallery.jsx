import Card from 'react-bootstrap/Card'
import IconHeart from './IconHeart'

const Gallery = ({ image }) => {
  return (
    <div className='col-md-4 mb-4'>
      <Card className='text-white'>
        <div style={{ width: '350px', height: '300px', overflow: 'hidden' }}>
          <Card.Img src={image.src.large} alt={image.alt} className='img-fluid' />
        </div>
        <Card.ImgOverlay>
          <Card.Text>
            {image.alt}
          </Card.Text>
          <IconHeart filled={image.liked} />
        </Card.ImgOverlay>
      </Card>
    </div>
  )
}

export default Gallery
