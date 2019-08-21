import React, { useState } from "react";
import Saldo from './saldo'
import Ofertas from "../Productos/ofertas"
import oferta1 from "../../img/CardOferta.svg"
import oferta2 from "../../img/CardOferta2.svg"
import oferta3 from "../../img/CardOferta3.svg"
import oferta4 from "../../img/CardOferta4.svg"
import oferta5 from "../../img/CardOferta5.svg"
import Header from "../header"
import MenuOpts from '../Options'
import ProductBar from "../Productos/ProductBar"

const Index = () => {
  const [tipo, setTipo] = useState("ofertas");
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
        <div className="">
          <Ofertas 
            oferta1={oferta1}
            oferta2={oferta2}
            oferta3={oferta3}
            oferta4={oferta4}
            oferta5={oferta5}
            />
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
