import { createContext, useEffect, useState } from 'react'
const PHOTO_URL = '/photos.json'

export const LikeMe = createContext()

const LikeProvider = ({ children }) => {
  const [images, setImages] = useState([])
  const getData = async () => {
    try {
      const response = await fetch(PHOTO_URL)
      const data = await response.json()
      setImages(data.photos)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <LikeMe.Provider value={{ images, setImages }}>
      {children}
    </LikeMe.Provider>

  )
}

export default LikeProvider
