import React from 'react';


const Ofertas = ({product}) => {
  return(
    <div class="card">
      <img class="card-img-top" src={product.imagen} alt="Card image cap"/>
      <div class="card-body">
        <h4 class="card-title">{product.name}</h4>
        <p class="card-text">
          {product.text}
        </p>
        <div class="input-group">
          <span class="input-group-btn">
              <button type="button" class="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                  <span class="glyphicon glyphicon-minus"></span>
              </button>
          </span>
          <input type="text" name="quant[1]" class="form-control input-number" value="1" min="1" max="10"/>
          <span class="input-group-btn">
              <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                  <span class="glyphicon glyphicon-plus"></span>
              </button>
          </span>
      </div>
        <a href="#!" class="btn btn-primary">Pedir</a>
      </div>
    </div>
  )
}
export default Ofertas;