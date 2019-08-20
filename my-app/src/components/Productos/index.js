import React, { useState } from "react";

import Ofertas from "../Productos/ofertas"
import oferta1 from "../../img/CardOferta.svg"
import oferta2 from "../../img/CardOferta2.svg"
import oferta3 from "../../img/CardOferta3.svg"
import oferta4 from "../../img/CardOferta4.svg"
import oferta5 from "../../img/CardOferta5.svg"

const Index = (allProducts) => {
  const [tipo, setTipo] = useState("ofertas");
  return (
    <div>
    <div className="">
      <button
        onClick={() => {
          setTipo("ofertas");
        }}
        type="button"
        className="m-1 p-2 btn-amarillo"
      >
       ofertas
      </button>

      <button
        onClick={() => {
          setTipo("productos");
        }}
        type="button"
        className="m-1 p-2 btn-amarillo"
      >
        Productos
      </button>
      </div>
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
        <div>
          productos
        </div>
      )}
      
    </div>
  );
};
export default Index;
