import React, { useState } from "react";
import Nav from "../Productos/Nav"
import ProductBar from "../Productos/ProductBar"
const Index = () => {
  const [tipo, setTipo] = useState("ofertas");
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
        <div className="">
          ofertas
        </div>
      )}
      {tipo === "productos" && (
        <ProductBar></ProductBar>      )}
      
    </>
  );
};
export default Index;
