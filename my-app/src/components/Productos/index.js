import React, { useState } from "react";
import {ofertasArray} from "../../components/Productos/ArrayOfOfertas"
import Ofertas from "../Productos/ofertas"
import Nav from "../Productos/Nav"
import { users } from '../../controller/users';
import ProductBar from "../Productos/ProductBar"
import Header from '../header'
import Saldo from './saldo'
import MenuOpts from '../Options'

const Index = () => {
  const [tipo, setTipo] = useState("ofertas");
  const [products, setProducts] = useState([...ofertasArray]);
 
const [billProducts,setBillProducts]=useState(0);
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



const getTotal = prodcts => {
  let emptyArray = [];
  let emptyArrayContent = 0;
  let prods =[...prodcts]
  prods.filter( prod =>{
    return prod.counter>0
    })
    prods.forEach(prod => {
    return emptyArray.push(prod.counter * prod.price);
  });

  emptyArray.forEach(prod => {
    return (emptyArrayContent += prod);
  });
  setBillProducts(emptyArrayContent)
  return emptyArrayContent;
};
  return (
    <>
       <Header />
       <Saldo object={users[0]}
       plata={billProducts}/>
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
                      total={()=>getTotal(products)}
                      // addProduct={addProduct}
                      addToCart={addToCart}
                      removeFromCart={removeFromCart}
                        name={prod.name}
                      price={prod.price}  
                      image={prod.image}
                      counter={prod.counter}
                      ></Ofertas>
                  ))}</div>)}
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
      </div>
      </div>
    </>
  );
};
export default Index;
