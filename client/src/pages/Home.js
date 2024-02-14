import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../pages/Home.css"
import pizzas from "../foodData"
import Pizza from '../components/Pizza'
function Home() {

  return (
    <div>

<div className="container-fluid  m-0 p-5 home-container-main">
  <div className="container  home-container rounded drop-in-2">
    <Navbar size={pizzas.length}/>
    <div className="row">
      <div className="col-lg-12 ">
        <div className=" text-center ">
          <h1 className="font-weight-bold main-text">Health Requires</h1>
          <h1 className="font-weight-bold main-text">Healthy food</h1>
          <h4>Manage your recipes the easy way</h4>
          <p className="text-muted">
            Share recipes with your friends and discover new ones
          </p>
          <p className="text-muted">
            More than <span className="text-danger">15,000 recipes</span> from
            around the world!
          </p>
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="Search Recipes"
          />
          <button className="btn btn-danger mt-3 rounded-pill">
            ADD RECIPES
          </button>
        </div>
        <div className='row mt-5 pt-5'>
         { pizzas.map(pizza=>{
          return <div className='col-lg-4 text-center pb-5'>
              <Pizza pizza ={pizza}/>
          </div>
         })}
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</div>  
    </div>
  )
}

export default Home