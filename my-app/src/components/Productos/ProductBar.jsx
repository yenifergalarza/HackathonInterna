

import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

import {productsData} from '../../controller/Firebase/authentication'
import EachProduct from "../Productos/EachProduct"
import MenuOpts from '../Options'



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
     
    </div>
    
    
    </>
  );
};
export default ProductBar;