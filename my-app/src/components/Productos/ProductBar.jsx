import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

import {arrayOfProductos} from '../../components/Productos/ArrayOfProductos'
import EachProduct from "../Productos/EachProduct"

const ProductBar = () => {
  const [tipoProductos, setTipoProductos] = useState("aceite");
  const [products1, setProducts1] = useState([...arrayOfProductos]);
  const oil = products1.filter(prod => prod.category ==="aceites");
  const can = products1.filter(prod => prod.category ==="conservas");
  const detergent = products1.filter(prod => prod.category ==="detergentes");
  const soap = products1.filter(prod => prod.category ==="jabones");
  const noodles = products1.filter(prod => prod.category ==="pastas");

  const addToCart = id => {
    let productsNew = [...products1];
    productsNew.forEach(prod => {
      if (prod.id === id) {
        return (prod.counter = prod.counter + 1);
      }
    });
    return setProducts1(productsNew);
  };

  //Disminuir cantidad de productos de la lista
  const removeFromCart = id => {
    let productsNew = [...products1];
    productsNew.forEach(prod => {
      if (prod.id === id && prod.counter > 0) {
        return (prod.counter = prod.counter - 1);
      }
    });

    console.log(productsNew);

    setProducts1(productsNew);
    return products1;
  };

  return (
    <>
    <div  className="">
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
   <button
        onClick={() => {
          setTipoProductos("aceite");
        }}
        type="button"
        className="  btn btn-danger"
      >
       aceite
      </button>

      <button
        onClick={() => {
          setTipoProductos("conservas");
        }}
        type="button"
        className=" btn btn-danger"
      >
        conservas
      </button>
         <button
        onClick={() => {
          setTipoProductos("detergente");
        }}
        type="button"
        className=" btn btn-danger"
      >
        detergente
      </button>
          <button
        onClick={() => {
          setTipoProductos("jabones");
        }}
        type="button"
        className="  btn btn-danger"
      >
        jabones
      </button>
         <button
        onClick={() => {
          setTipoProductos("pastas");
        }}
        type="button"
        className=" btn btn-danger"
      >
        pastas
      </button>
</div>
      </div>
      <div>
      
 {tipoProductos === "aceite" && (
         <div className="card-group">
         {oil && (
           <div
             className="row m-5"
            
           >
             {oil.map(doc => (
               <EachProduct
               id={doc.id}
               addToCart={addToCart}
               removeFromCart={removeFromCart}
                 name={doc.name}
               price={doc.price}  
               image={doc.image}
               counter={doc.counter}
               
               ></EachProduct>
             ))}
           </div>
         )}
       </div>
      )}
      </div>
     
     
      <div>
      
 {tipoProductos === "conservas" && (
         <div className="card-group">
         {can && (
           <div
             className="row m-5"
            
           >
             {can.map(doc => (
               <EachProduct
               id={doc.id}
               addToCart={addToCart}
               removeFromCart={removeFromCart}
                 name={doc.name}
               price={doc.price}  
               image={doc.image}
               counter={doc.counter}
               ></EachProduct>
             ))}
           </div>
         )}
       </div>
      )}
      </div>
      <div>
     
 {tipoProductos === "detergente" && (
         <div className="card-group">
         {detergent && (
           <div
             className="row m-5"
            
           >
             {detergent.map(doc => (
               <EachProduct
               id={doc.id}
               addToCart={addToCart}
               removeFromCart={removeFromCart}
                 name={doc.name}
               price={doc.price}  
               image={doc.image}
               counter={doc.counter}
               ></EachProduct>
             ))}
           </div>
         )}
       </div>
      )}
      </div>
      <div>
      
 {tipoProductos === "jabones" && (
         <div className="card-group">
         {soap && (
           <div
             className="row m-5"
            
           >
             {soap.map(doc => (
               <EachProduct
               id={doc.id}
               addToCart={addToCart}
               removeFromCart={removeFromCart}
                 name={doc.name}
               price={doc.price}  
               image={doc.image}
               counter={doc.counter}
               
               ></EachProduct>
             ))}
           </div>
         )}
       </div>
      )}
      </div>
      <div>
      
 {tipoProductos === "pastas" && (
         <div className="card-group">
         {noodles && (
           <div
             className="row m-5"
            
           >
             {noodles.map(doc => (
               <EachProduct
               id={doc.id}
               addToCart={addToCart}
               removeFromCart={removeFromCart}
                 name={doc.name}
               price={doc.price}  
               image={doc.image}
               counter={doc.counter}
               
               ></EachProduct>
             ))}
           </div>
         )}
       </div>
      )}
      </div>
    
    </>
  );
};
export default ProductBar;
