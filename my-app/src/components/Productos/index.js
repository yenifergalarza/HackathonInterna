import React, { useState } from "react";
import {ofertasArray} from "../../components/Productos/ArrayOfOfertas"
import Ofertas from "../Productos/ofertas"/* 
import oferta1 from "../../img/CardOferta.svg"
import oferta2 from "../../img/CardOferta2.svg"
import oferta3 from "../../img/CardOferta3.svg"
import oferta4 from "../../img/CardOferta4.svg"
import oferta5 from "../../img/CardOferta5.svg" */
import Nav from "../Productos/Nav"
import ProductBar from "../Productos/ProductBar"

const Index = () => {
  const [tipo, setTipo] = useState("ofertas");
  const [products, setProducts] = useState([]);
  //Añadir productos a la lista
  //Aumentar contidad de productos de la lista
  const addToCart = (id, title, price, counter) => {
    const newProducts = [...products, { id, title, price, counter }];
    newProducts.forEach(prod => {
      if (prod.id === id) {
        return (prod.counter = prod.counter + 1);
      }
    });
    return setProducts(newProducts);
  };

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
       <Nav/>
  
    <div className="">
      <button
        onClick={() => {
          setTipo("ofertas");
        }}
        type="button"
        className="m-1 p-2 btn-danger"
      >
       ofertas
      </button>

      <button
        onClick={() => {
          setTipo("productos");
        }}
        type="button"
        className="m-1 p-2 btn-danger"
      >
        Productos
      </button>
      </div>
      {tipo === "ofertas" && (
         <div className="wrap ">
           {ofertasArray.map(prod => (
               <Ofertas
               id={prod.id}
              
               addToCart={addToCart}
          removeFromCart={removeFromCart}
                 name={prod.name}
               price={prod.price}  
               image={prod.images}
               counter={prod.counter}
               
               ></Ofertas>
             ))}
        </div>
      )}
      {tipo === "productos" && (
        <ProductBar></ProductBar>      )}
      
    </>
  );
};
export default Index;
