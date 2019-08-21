import React, { useState } from "react";
import {ofertasArray} from "../../components/Productos/ArrayOfOfertas"
import Ofertas from "../Productos/ofertas"
import Nav from "../Productos/Nav"
import { users } from '../../controller/users';
import ProductBar from "../Productos/ProductBar"
import Header from '../header'
import Saldo from './saldo'
import MenuOpts from '../Options'
import auth from '../../controller/routes/auth';
import{ ordersData} from '../../controller/Firebase/authentication'

const Index = (props) => {
  const [tipo, setTipo] = useState("ofertas");
  const [products, setProducts] = useState([...ofertasArray]);
  const [client, setClient] = useState(users[0].name);
const [billProducts,setBillProducts]=useState(0);
const [billProducts2,setBillProducts2]=useState(0);

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
const getTotalGanancia = prodcts => {
  let emptyArray = [];
  let emptyArrayContent = 0;
  let prods =[...prodcts]
  prods.filter( prod =>{
    return prod.counter>0
    })
    prods.forEach(prod => {
    return emptyArray.push(prod.counter * prod.ganancia);
  });

  emptyArray.forEach(prod => {
    return (emptyArrayContent += prod);
  });
  setBillProducts2(emptyArrayContent)
  return emptyArrayContent;
};

const sendOrders = (products, clientName,plata) => {
  let prods =[...products];
  let newP = prods.filter( prod => prod.counter>0)
  console.log("entre a firebase", newP);
  ordersData.add({
    name: clientName,
    cart: newP,
    time: new Date(),
    bill:plata,
  });
  /* setClient("");
  setProducts([]); */
};

  return (
    <>
       <Header logoutprop={props} cart={<a data-testid='close' onClick={() => {
              auth.logout(() => { props.history.push("/cart") });
              }} ><i class="fas fa-shopping-cart text-white"></i></a>} />
              <Saldo 
                object={users[0]}
                total={billProducts}
                ganancia={billProducts2}
              />
            <div className="fill-available align-items-center absolute top4 d-flex flex-column ">
            <ul className="nav justify-content-center" role="tablist">
              <MenuOpts click={() => {setTipo("ofertas")}} options="Ofertas" aClass="nav-item nav-link active text-color"/>
              <MenuOpts click={() => {setTipo("productos")}} options="Productos" aClass="nav-item nav-link text-color" />
            </ul>
            <div data-testid='opt'>
              {tipo === "ofertas" && (
                <div className="wrap ">
                  {products.map(prod => (
                    <Ofertas
                    ganancia={prod.ganancia}
                      id={prod.id}
                      total={()=>getTotal(products)}
                      getTotalGanancia={()=>getTotalGanancia(products)}
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
                      total={()=>getTotal(products)}
                      getTotalGanancia={()=>getTotalGanancia(products)}
                      ganancia={prod.ganancia}
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
