import React from 'react';

const Ofertas = ({name,id,image,removeFromCart,price,counter,addToCart}) => {

  return(
    
        <div className="m-3">
          <img src={image} alt="oferta" ></img>
          <p>{name}</p>
          <div class="btn-group btn-group-sm m-1" role="group"  data-toggle="buttons">
  <button class="btn btn-danger" onClick={() =>   addToCart (id)}>
   
<i class="fas fa-plus"></i>

  </button>
  <button class="btn btn-danger " > 
    {counter}
  </button>
  <button class="btn btn-danger"  onClick={() => removeFromCart(id)} >
    <i class="fas fa-minus"></i>
  </button>
</div>
<button class="btn btn-danger"  > Añade</button>
        </div>
       
    
  )
}
export default Ofertas;