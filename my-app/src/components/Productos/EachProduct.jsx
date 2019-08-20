import React from 'react';


const EachProducts = (key,name,price,image) => {
    console.log(name);
  return (
    <>
   

<div class="card col-6"  style={{ maxWidth: "50%" }}   key={key}>
  <img src={image} class="card-img-top figure-img img-fluid rounded" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center"> {name}</h5>
    <p class="card-text">{price}</p>
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" id="option1" autocomplete="off" /> 
<i class="fas fa-plus"></i>

  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option2" autocomplete="off"/>el contador p
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option3" autocomplete="off"/><i class="fas fa-minus"></i>
  </label>
</div>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
      
     
    
    </>
  )
}
export default EachProducts;
