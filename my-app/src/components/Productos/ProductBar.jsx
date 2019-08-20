

import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

import firebaseAuth from '../../controller/Firebase/authentication'
import EachProduct from "../Productos/EachProduct"
 
const ProductBar = (allProducts) => {
  const [tipo, setTipo] = useState("aceite");
  const [oil] = useCollection(
    firebaseAuth.firestore().collection("allProducts").where("category", "==", "aceite"),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );
  // const [can] = useCollection(
  //   firebaseAuth.firestore().collection("allProducts").where("category", "==", "conservas"),
  //   {
  //     snapshotListenOptions: { includeMetadataChanges: true }
  //   }
  // );
  return (
    <>
    <div  className="card-group">
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
   <button
        onClick={() => {
          setTipo("aceite");
        }}
        type="button"
        className="m-1 p-2 btn btn-danger"
      >
       aceite
      </button>

      <button
        onClick={() => {
          setTipo("conservas");
        }}
        type="button"
        className="m-1 p-2 btn btn-danger"
      >
        conservas
      </button>
         <button
        onClick={() => {
          setTipo("detergente");
        }}
        type="button"
        className="m-1 p-2 btn btn-danger"
      >
        detergente
      </button>
          <button
        onClick={() => {
          setTipo("jabones");
        }}
        type="button"
        className="m-1 p-2 btn btn-danger"
      >
        jabones
      </button>
         <button
        onClick={() => {
          setTipo("pastas");
        }}
        type="button"
        className="m-1 p-2 btn btn-danger"
      >
        pastas
      </button>
</div>
      </div>
      {tipo === "aceite" && (
         <div className="row m-5">
         {oil && (
           <div
             className="r"
             style={{ padding: 2 + "em" }}
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
     
     {/*  {tipo === "conservas" && (
         <div className="row m-5">
         {can && (
           <div
             className="r"
             style={{ padding: 2 + "em" }}
           >
             {can.docs.map(doc => (
               <EachProduct
                 key={doc.id}
                 name={doc.data().name}
               price={doc.data().price}  
               image={doc.data().image}
               ></EachProduct>
             ))}
           </div>
         )}
       </div>
      )} */}
    </>
  );
};
export default ProductBar;