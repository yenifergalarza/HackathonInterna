import React, { useState } from "react";
import Saldo from './saldo'
import {ofertasArray} from "../../components/Productos/ArrayOfOfertas"
import Ofertas from "../Productos/ofertas"
import oferta1 from "../../img/CardOferta.svg"
import oferta2 from "../../img/CardOferta2.svg"
import oferta3 from "../../img/CardOferta3.svg"
import oferta4 from "../../img/CardOferta4.svg"
import oferta5 from "../../img/CardOferta5.svg"
import Header from "../header"
import MenuOpts from '../Options'
import Nav from "../Productos/Nav"
import ProductBar from "../Productos/ProductBar"

const Index = () => {
  const [tipo, setTipo] = useState("ofertas");
  const [products, setProducts] = useState([...ofertasArray]);
  //Añadir productos a la lista
  // const addProduct = (id, title, price, counter) => {
  //   const newProducts = [...products, { id, title, price, counter }];
  //   setProducts(newProducts);
  // };

  //Aumentar contidad de productos de la lista
  const addToCart = id => {
    let productsNew = [...products];
    productsNew.forEach(prod => {
      if (prod.id === id) {
        return (prod.counter = prod.counter + 1);
      }
    });
    return setProducts(productsNew);
  };

  //Dismin

  //Disminuir cantidad de productos de la lista
  const removeFromCart = id => {
    let productsNew = [...products];
    productsNew.forEach(prod => {
      if (prod.id === id && prod.counter > 0) {
        return (prod.counter = prod.counter - 1);
      }
    });

    console.log(productsNew);

    setProducts(productsNew);
    return products;
  };
  return (
    <>
       <Header />
       <Saldo />
        <div className="fill-available align-items-center d-flex flex-column ">
            <ul className="nav justify-content-center" role="tablist">
              <MenuOpts click={() => {setTipo("ofertas")}} options="Ofertas" aClass="nav-item nav-link active text-color"/>
              <MenuOpts click={() => {setTipo("productos")}} options="Productos" aClass="nav-item nav-link text-color" />
            </ul>
            <div data-testid='opt'>
            {tipo === "ofertas" && (
         <div className="wrap ">
         {products.map(prod => (
             <Ofertas
             id={prod.id}
            // addProduct={addProduct}
             addToCart={addToCart}
        removeFromCart={removeFromCart}
               name={prod.name}
             price={prod.price}  
             image={prod.image}
             counter={prod.counter}
             
             ></Ofertas>
           ))}
      </div>
      )}
      {tipo === "productos" && (
        <ProductBar></ProductBar>      )}
            </div>
        </div>
    </>
  );
};
export default Index;
