

import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

import {productsData} from '../../controller/Firebase/authentication'
import EachProduct from "../Productos/EachProduct"
 



const ProductBar = () => {
  const [tipoProductos, setTipoProductos] = useState("aceite");
  const [oil, loading, error] = useCollection(
    productsData.where("category", "==", "aceite"),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );

  const [can, loading2, error2] = useCollection(
    productsData.where("category", "==", "conservas"),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );

  const [detergent, loading3, error3] = useCollection(
    productsData.where("category", "==", "detergente"),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );

  const [soap, loading4, error4] = useCollection(
    productsData.where("category", "==", "jabones"),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );

  const [noodles, loading5, error5] = useCollection(
    productsData.where("category", "==", "pastas"),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );
  
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
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && (
              <progress class="progress is-medium is-dark" max="100">
                45%
              </progress>
            )}
 {tipoProductos === "aceite" && (
         <div className="card-group">
         {oil && (
           <div
             className="row m-5"
            
           >
             {oil.docs.map(doc => (
               <EachProduct
              
                 name={doc.data().name}
               price={doc.data().price}  
               image={doc.data().image}
               
               ></EachProduct>
             ))}
           </div>
         )}
       </div>
      )}
      </div>
     
     
      <div>
      {error2 && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading2 && (
              <progress class="progress is-medium is-dark" max="100">
                45%
              </progress>
            )}
 {tipoProductos === "conservas" && (
         <div className="card-group">
         {can && (
           <div
             className="row m-5"
            
           >
             {can.docs.map(doc => (
               <EachProduct
              
                 name={doc.data().name}
               price={doc.data().price}  
               image={doc.data().image}
               
               ></EachProduct>
             ))}
           </div>
         )}
       </div>
      )}
      </div>
      <div>
      {error3 && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading3 && (
              <progress class="progress is-medium is-dark" max="100">
                45%
              </progress>
            )}
 {tipoProductos === "detergente" && (
         <div className="card-group">
         {detergent && (
           <div
             className="row m-5"
            
           >
             {detergent.docs.map(doc => (
               <EachProduct
              
                 name={doc.data().name}
               price={doc.data().price}  
               image={doc.data().image}
               
               ></EachProduct>
             ))}
           </div>
         )}
       </div>
      )}
      </div>
      <div>
      {error4 && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading4 && (
              <progress class="progress is-medium is-dark" max="100">
                45%
              </progress>
            )}
 {tipoProductos === "jabones" && (
         <div className="card-group">
         {soap && (
           <div
             className="row m-5"
            
           >
             {soap.docs.map(doc => (
               <EachProduct
              
                 name={doc.data().name}
               price={doc.data().price}  
               image={doc.data().image}
               
               ></EachProduct>
             ))}
           </div>
         )}
       </div>
      )}
      </div>
      <div>
      {error5 && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading5 && (
              <progress class="progress is-medium is-dark" max="100">
                45%
              </progress>
            )}
 {tipoProductos === "pastas" && (
         <div className="card-group">
         {noodles && (
           <div
             className="row m-5"
            
           >
             {noodles.docs.map(doc => (
               <EachProduct
              
                 name={doc.data().name}
               price={doc.data().price}  
               image={doc.data().image}
               
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