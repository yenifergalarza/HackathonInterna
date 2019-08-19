import React from 'react';
//import * as firebase from "firebase";
import { useCollection } from "react-firebase-hooks/firestore";

import firebaseAuth from '../controller/Firebase/authentication'

const Products = () => {

//llamando colleccion prodeuctos
const [allProducts] = useCollection(firebaseAuth.firestore().collection("allProducts"), {
    snapshotListenOptions: { includeMetadataChanges: true }
  });

  return (
    <div className="card-group">
      <div data-testid="desayuno">
        {allProducts && (
          <div className="row">
            {allProducts.docs.map(
              (ele) =>
                ele.data().category === "pastas" && (
                  <div
                    key={ele.data().id}
                    className="col-6"
                    style={{ maxWidth: "50%" }}
                  >
                    <div className="card-body">
                    </div>
                    <div>
                      <h4 className="card-title text-center">
                        {ele.data().name}  ${ele.data().price}
                      </h4>
                    </div>
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  )
}
export default Products;