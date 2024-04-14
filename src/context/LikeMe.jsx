import { createContext, useState } from 'react'

export const LikeMe = createContext()

const LikeProvider = ({ children }) => {
  const [isLike, setIsLike] = useState = (false)

  const likeYes = () => {
    setIsLike(true)
  }

  const likeNo = () => {
    setIsLike(false)
  }

  return (
    <LikeMe.Provider value={{ isLike, likeYes, likeNo }}>
      {children}
    </LikeMe.Provider>

  )
}

export default LikeProvider
