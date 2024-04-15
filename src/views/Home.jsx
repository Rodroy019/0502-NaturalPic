import Gallery from '../components/Gallery'
import { useContext } from 'react'
import { LikeMe } from '../context/LikeMe'

const Home = () => {
  const { images } = useContext(LikeMe)

  return (
    <div className='container'>
      <h1 className='m-4 text-center'>Natural Pic</h1>
      <div className='row'>
        {images.map(image => (
          <Gallery key={image.id} image={image} />
        ))}
      </div>
    </div>
  )
}
export default Home
