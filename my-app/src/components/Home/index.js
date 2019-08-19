import React from 'react'
import logo from '../../img/logo.png';
import baking from '../../img/baking.jpg'
import cooking from '../../img/cooking.jpg'
const Home = () => {
    return(
        <>
        <div className="header d-inline-flex align-items-end">
        <div className="mb-4 mr-3"> 
            <a href="#"><img src={"https://drive.google.com/file/d/1ZIE78k1cMWnaHQbN7kKGZQ7mtSv3unPT/view"} className="logo"/></a> 
        </div>
        <div class="menu">
            <div>
                <a href="#">Nosotros</a>
            </div>
            <div>
                <a href="#">Marcas</a>
            </div>
            <div>
                <a href="#">Desarrollo Sostenible</a>
            </div>
        </div>
        </div>
                <div id="carouselExampleControls" className="carousel slide w-100" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={baking} class="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={cooking} class="d-block w-100" alt="..."/>
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
        </>
    )
}
export default Home;