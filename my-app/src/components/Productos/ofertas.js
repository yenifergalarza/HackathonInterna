import React from 'react';

const Ofertas = ({name,price,id,image,counter,addToCart,removeFromCart}) => {
  console.log(image);
  return(
    
        <div className="m-3">
          <img src={image} alt="oferta" ></img>
          <p>{name}</p>
          <div class="btn-group btn-group-sm m-1" role="group"  data-toggle="buttons">
  <button class="btn btn-danger" onClick={() => addToCart(id, name, price, counter)}>
   
<i class="fas fa-plus"></i>

  </button>
  <button class="btn btn-danger " > 
    el contador p
  </button>
  <button class="btn btn-danger"  onClick={() => removeFromCart(id)} >
    <i class="fas fa-minus"></i>
  </button>
</div>
        </div>
       
    
  )
}
export default Ofertas;