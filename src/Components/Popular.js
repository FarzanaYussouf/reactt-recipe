import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Home.css"
import { Link } from 'react-router-dom';
const Popular = () => {
  const[data, setData]=useState([])
  useEffect(()=>{
    const fetchData = async ()=>{
      const api = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      const data = await api.json();

      setData(data.meals)
    }
    fetchData()

  }, [])
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true
  };
  return (
   <>
   <div className="slider-container"
   style={{
    height:'60vh',
    width:'90%',
    margin:'auto',

   }

   }
   >
      <Slider {...settings}
      style={{
        margin:'1rem'
      }

      }
      >
        {data.map((d) => {
          return (
            <Link to={`/${d.idMeal}`}>
            <div className='slider'>
<img src={d.strMealThumb} alt="" style={{width:'16rem',height:'14rem'}}/>
            </div>
            </Link>
          )
        }

        )
        }

        
        
         
         
      </Slider>
    </div>
   </>
  )
}

export default Popular
