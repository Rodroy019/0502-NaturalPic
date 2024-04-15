import Card from 'react-bootstrap/Card'
import IconHeart from './IconHeart'

const Gallery = ({ image }) => {
  return (
    <div className='col-md-4 mb-4'>
      <Card className='text-white'>
        <div style={{ position: 'relative', width: '350px', height: '300px', overflow: 'hidden' }}>
          <Card.Img src={image.src.large} alt={image.alt} className='img-fluid' />
          <div style={{ position: 'absolute', bottom: '0', left: '0', padding: '10px', width: '100%' }}>
            <p style={{ color: 'white', marginBottom: '0', fontSize: '14px' }}>{image.alt}</p>
            <div style={{ position: 'absolute', bottom: '150px', right: '10px' }}>
              <IconHeart filled={image.liked} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Gallery
