import React from 'react';

const Ofertas = ({oferta1, oferta2, oferta3, oferta4, oferta5}) => {
  return(
      <div className="wrap ">
        <div className="m-3">
          <img src={oferta1}></img>
        </div>
        <div className="m-3">
          <img src={oferta2}></img>
        </div>
        <div className="m-3">
          <img src={oferta3}></img>
        </div>
        <div className="m-3">
          <img src={oferta4}></img>
        </div>
        <div className="m-3">
          <img src={oferta5}></img>
        </div>
      </div>
    
  )
}
export default Ofertas;