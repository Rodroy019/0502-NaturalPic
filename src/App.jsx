import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Favorites from './views/Favorites'
import Home from './views/Home'
import NotFound from './views/NotFound'
import React from 'react'
import LikeProvider from './context/LikeMe'

const App = () => {
  return (
    <LikeProvider>
      <div>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/favoritos'
            element={<Favorites />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </div>
    </LikeProvider>
  )
}

export default App
