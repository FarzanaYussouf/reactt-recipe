import React from 'react'
import Navbar from './Navbar'
import "./Home.css"
import Popular from './Popular'
import TrendingSliders from './TrendingSliders'
const Home = () => {
  return (
    <>
    <Navbar/>
    <Popular/>
    <TrendingSliders/>
    </>
  )
}

export default Home
