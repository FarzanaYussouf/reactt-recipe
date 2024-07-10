import React from 'react'
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recipeid from './Components/Recipeid';
import Category from './Components/Category';
import Searchelement from './Components/Searchelement';
const App = () => {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/:idMeal' element={<Recipeid/>}/>
      <Route path='/category/:name'element={<Category/>}/>
      <Route path='/search/:searchTerm'element={<Searchelement/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default App

