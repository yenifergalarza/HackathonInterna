import React from 'react'
import logo from '../../img/logo.png';
import baking from '../../img/baking.jpg'
import cooking from '../../img/cooking.jpg'
import auth from '../../controller/routes/auth';
import{Link} from "react-router-dom"
import Footer from '../footer'
const Home = (props) => {
  return (
    <>
      <div className="header d-inline-flex align-items-end container pb-3">
      <div className="col-12 d-flex justify-content-center align-items-center p-0 menu">
        <div className="mb-4 col-6">
          <img src={logo} className="logo" />
        </div>
        <div className="col-6 col-md-3 text-white d-flex col-lg-3 tiendita">
          <i class="fas fa-home"></i>
          <a onClick={()=>{auth.login(() => { props.history.push("/login") })}}>Mi Tiendita</a>
        </div>
        </div>
        <div className="menu mt-2 col-12 d-flex p-0 justify-content-evenly">
          <div className="col-4 col-md-3 col-lg-3">
            <a href="#">Nosotros</a>
          </div>
          <div className="col-4 col-md-3 col-lg-3">
            <a href="../chatbot/index.html"  target="_blank" >Chatea</a>
          </div>
          <div className="col-4 col-md-3 col-lg-3">
            <a href="#">Marcas</a>
          </div>
          <div className="col-4 col-md-3 col-lg-3">
            <a href="#">Inversionistas</a>
          </div>
          </div>
        </div>
      <div id="carouselExampleControls" className="carousel slide w-100" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={baking} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={cooking} className="d-block w-100" alt="..." />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div class="media py-3">
        <img src="" class="mr-3"/>
        <div class="media-body">
          <h5 class="mt-0">Bienvenid@s</h5>
          Alicorp reafirma su compromiso de inversión en el Perú con la adquisición de Intradevco
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Home;