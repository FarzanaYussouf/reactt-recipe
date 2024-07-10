import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate =useNavigate()
  const [input, setInput] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid nav ">
          
          <Link to='/' className='link'>
            <h4 className='fw-bold name ms-2 mt-3 mb-3'>Recipe-App</h4>
          </Link>
          <button class="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon bg-white"></span>
          </button>
          <div class="collapse navbar-collapse bg-black" id="navbarTogglerDemo02">
            <div className="search ms-3" >
              <form
                onSubmit={handleSubmit}
              >
                <input className='input fw-bold fs-5'
                  onChange={(e) => setInput(e.target.value)}
                  type='text'
                />

              </form>
            </div>
            <ul class=" navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li class="nav-item  fw-bold">
                <Link class="nav-link" to={'/category/malaysian'}>Turkish</Link>
              </li>
              <li class="nav-item fw-bold">
                <Link class="nav-link" to={'/category/chinese'}>Chinese</Link>
              </li>
              <li class="nav-item    fw-bold">
                <Link class="nav-link" to={'/category/indian'}>Pakistani</Link>
              </li>
              <li class="nav-item fw-bold">
                <Link class="nav-link" to={'/category/american'}>American</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar
