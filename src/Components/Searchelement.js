import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import TrendingSliders from './TrendingSliders'
import Navbar from './Navbar'

const Searchelement = () => {
    const {searchTerm} =useParams();
    const[data, setData]=useState([])
    useEffect(()=>{
      const fetchData = async ()=>{
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        const data = await api.json();
  
        setData(data.meals)
        console.log(data);
      }
      fetchData()
  
    }, [searchTerm])

  return (
    <>
    <Navbar/>
    <div
    style={{
        margin: 'auto',
        width: '98%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
        gridGap: '1rem',
        marginTop: '2rem'
    }

    }
>
    {
    data.map((d) => {
        return (
<Link to={`/${d.idMeal}`} className='link'>
            <div style={{
                textAlign: 'center'
            }}>
                <div className='img'>
                    <img src={d.strMealThumb} alt="" style={{ width: '13rem',height:'10rem' }} />
                </div>
                <h5 className='mt-4'>{d.strMeal}</h5>
            </div>
            </Link>

        )
    }

    )
    }


</div>
<TrendingSliders/>
</>
  )
}

export default Searchelement
