import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TrendingSliders from './TrendingSliders'
import { useParams } from 'react-router-dom'
import "./Home.css"
const Recipeid = () => {
  const { idMeal } = useParams()

  const [data, setData] = useState([])
  const [active, setActive] = useState('ingredient')
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      const data = await api.json();

      setData(data.meals[0])
      console.log(data);
    }
    fetchData()

  }, [idMeal])

  return (
    <>
      <Navbar />
      <div
        style={{
          width: '90%',
          margin: 'auto',
          textAlign: 'center'
        }}
      >
        <h1>{data.strMeal}</h1>
        <div
          style={{
            display: 'flex'
          }}
        >
          <div className='img'

            style={{
              width: '30%',
              marginTop: '1.5rem'
            }}
          >



            <img src={data.strMealThumb} alt="" style={{ width: '18rem' }} />
            </div>
         
           
        
          <div className='content' style={{ width: '60%' }}>
         <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
            <button className='btn fw-bolder fs-5' onClick={() => setActive('ingredient')}>Ingredients</button>
          
            </div>
          
            <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
            <button className='btn fw-bolder fs-5' onClick={() => setActive('instruction')}>Instructions</button>
           
            </div>

            </div>



          {
            active === 'ingredient' ? (
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                >{data.strIngredient1} - {data.strMeasure1}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{data.strIngredient2} - {data.strMeasure2}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{data.strIngredient3} - {data.strMeasure3}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{data.strIngredient4} - {data.strMeasure4}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{data.strIngredient5} - {data.strMeasure5}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{data.strIngredient6} - {data.strMeasure6}</div>
              </div>

            ) : (
              <p className='ms-5 fw-bold'>{data.strInstructions}</p>
            )
          }
        </div>
      </div>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <TrendingSliders />
      </div>
    </>
  )
}

export default Recipeid
