   import React from 'react';

const Ofertas = ({name,id,image,removeFromCart,price,counter,addToCart, total,getTotalGanancia}) => {

  return(
    
        <div className="m-3">
          <img src={image} alt="oferta" ></img>
          <p>{name}</p>
          <div class="btn-group btn-group-sm m-1" role="group"  data-toggle="buttons">
  <button class="btn btn-danger" onClick={() =>   
  {addToCart(id); 
  getTotalGanancia(id)}
  }>
   
<i class="fas fa-plus"></i>

  </button>
  <button class="btn btn-danger " > 
    {counter}
  </button>
  <button class="btn btn-danger"  onClick={() => removeFromCart(id)} >
    <i class="fas fa-minus"></i>
  </button>
</div>
<button class="btn btn-danger" onClick={total} >Agregar al carrito</button>
        </div>
       
    
  )
}
export default Ofertas;