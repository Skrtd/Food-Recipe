import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './component/MainPage.jsx'
import { Route,Routes } from 'react-router-dom'
import MealInfo from './component/MealInfo.jsx'

function App() {

  return (
    <>
    <div className='app-bg'>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/:mealId'element={<MealInfo/>} />
    </Routes>
    </div>  
    </>
  )
}

export default App;
