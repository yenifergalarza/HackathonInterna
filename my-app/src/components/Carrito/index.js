import React from 'react'
import header from '../../img/header.jpeg'
import { Link } from "react-router-dom";

import { users } from '../../controller/users';
import { check } from '../../img/check.png';
import { ofertasArray } from '../Productos/ArrayOfOfertas';
import Total from '../Productos/Total';

const Carrito = ({cart, total, getTotal, billProducts}) => {

    return(
        <>
        <div data-testid="header" className='width-100 d-flex'>
        <img src={header} alt="img" className="w-100" />

        <ul className="width-100 nav nav-tabs justify-content-center">
        <li className="nav-item dropdown bars m-2">
        <Link to="/productos">
          <a data-testid='close'>
            <i class="fas fa-sign-out-alt text-white"></i>
          </a>
        </Link>
        </li>
        <li className="nav-item dropdown bars mt-5 m-2">
          {cart}
        </li>
      </ul>
    </div>
    <div className="p15">
      <p className="p-cart">{`Felicitaciones ${users[0].name}`}</p>
      <img src="https://i.postimg.cc/qqwGmRrk/check.png" alt="img" className="" style={{ maxWidth: "10%" }}/>
      <p className="p-cart">{ `tu pedido se ha realizado con éxito`}</p>
    </div>
      <div>
      <p className="m-0 f13 text-inherit">{`Hola ${users[0].name}, tu saldo es: s/. ${users[0].saldo}`}</p>
      <p className="m-0 f13 text-inherit">{`Ganancia: ${ofertasArray[0].ganancia}`}</p>
      <p className="mb-2 f13 text-inherit">tus compras:</p>
      <div className="b-tb" >
        {ofertasArray.map(p=>{
          return <div className="space-between"><p className="m-0 f13 text-inherit">{p.name}</p><p className="m-0 f13 text-inherit">{p.price}</p></div>
        })}
      </div>
      <div className="space-between">
      <p className="mt-2 f13 text-inherit"><strong>TOTAL:</strong></p>
      <p className="mt-2 f13 text-inherit"><strong> $420.36</strong> </p>
      </div>
      

      {/* <p className="m-1 f13">{`${ofertasArray[1].name}`}</p>
      <p className="m-1 f13">{`${ofertasArray[2].name}`}</p> */}
      {/* <table class="table table-borderless">
  <thead>
    <tr>
      <th>Producto</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{`${ofertasArray[0].name}`}</td>
      <td>{`${ofertasArray[0].price}`}</td>
      
    </tr>
  </tbody>
</table> */}
      </div>
      <div className="p15">
      <p className=""><strong>Podrás recogerlo en la zona de entregas de la planta</strong></p>
      <button class="btn btn-danger">
        Comprar ahora
      </button>
    </div>
    
    </>
    )
}
export default Carrito;


