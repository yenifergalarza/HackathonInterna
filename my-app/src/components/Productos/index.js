import React, { useState } from "react";
import {ofertasArray} from "../../components/Productos/ArrayOfOfertas"
import Ofertas from "../Productos/ofertas"
import Nav from "../Productos/Nav"
import ProductBar from "../Productos/ProductBar"

const Index = () => {
  const [tipo, setTipo] = useState("ofertas");
  const [products, setProducts] = useState([...ofertasArray]);
 

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
      style={{border: "none"}}        
      onClick={() => {
          setTipo("ofertas");
        }}
        type="button"
        className="m-1 p-2 btn-danger"
      >
       ofertas
      </button>

      <button
       style={{border: "none"}}  
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
        <ProductBar
        />
          
        )}
      
    </>
  );
};
export default Index;
