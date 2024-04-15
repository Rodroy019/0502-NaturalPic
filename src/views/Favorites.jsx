import Gallery from '../components/Gallery'
import { useContext } from 'react'
import { LikeMe } from '../context/LikeMe'

const Favorites = () => {
  const { images } = useContext(LikeMe)

  return (
    <div className='container'>
      <h1 className='mt-4 mb-4 text-center'>Imágenes Favoritas</h1>
      <div className='row'>
        {images.map(image => (
          image.liked ? <Gallery key={image.id} image={image} /> : null
        ))}
      </div>
    </div>
  )
}
export default Favorites
