import React from 'react';

const EachProducts = ({
  id,
  key,
  name,
  price,
  image,
  counter,
  addToCart,
  removeFromCart}) => {
 
  return (
    <>
    <div class="card col-12 col-sm-4 col-md-4 col-lg-3 col-xl-2 m-1 " key={key}>
      <img src={image} class="card-img-top figure-img img-fluid rounded" /* style={{height: 475+"px"}} */alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center"> {name}</h5>
        <p class="card-text">{price}</p>
      </div>
      <div class="btn-group btn-group-sm m-1" role="group"  data-toggle="buttons">
        <button 
          class="btn btn-danger"
          class="btn btn-danger "
          type="button"
          onClick={() => {
            addToCart(id)
        }}>
          
            <i class="fas fa-plus"></i>
        </button>
        <button class="btn btn-danger "> 
        {counter}
        </button>
        <button 
          class="btn btn-danger"
          type="button"
          onClick={() => {
            removeFromCart(id)
          }}>
          <i class="fas fa-minus"></i>
        </button>
      </div>
        <button  class="btn btn-danger btn-sm m-1">Compra</button>
    </div>
    </>
  )
}
export default EachProducts;
