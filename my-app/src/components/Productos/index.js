import React, { useState } from "react";


const Index = (allProducts) => {
  const [tipo, setTipo] = useState("desayuno");
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
          ofertas
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
