import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

import {arrayOfProductos} from '../../components/Productos/ArrayOfProductos'
import EachProduct from "../Productos/EachProduct"
import MenuOpts from '../Options'



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
            <div className="fill-available align-items-center d-flex flex-column ">
            <ul className="nav nav-tabs justify-content-center" role="tablist">
            <li className="nav-item">
            <MenuOpts click={() => {setTipoProductos("aceite")}} options="Aceites" aClass="nav-link active text-color"/>
            </li>
            <li className="nav-item">
              <MenuOpts click={() => {setTipoProductos("conservas")}} options="Conservas" aClass="nav-link text-color" />
            </li>
            <li className="nav-item">
            <MenuOpts click={() => {setTipoProductos("detergente")}} options="Detergentes" aClass="nav-link text-color" />
            </li >
            <li className="nav-item">
            <MenuOpts click={() => {setTipoProductos("jabones")}} options="Jabones" aClass=" nav-link  text-color" />
            </li>
            <li className="nav-item">
            <MenuOpts click={() => {setTipoProductos("pastas")}} options="Pastas" aClass="nav-link text-color" />
            </li>
            </ul>
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
     
    </div>
    
    
    </>
  );
};
export default ProductBar;
