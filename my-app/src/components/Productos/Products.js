import React from 'react';
//import * as firebase from "firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import firebaseAuth from '../../controller/Firebase/authentication'

const Products = () => {
const [allProducts] = useCollection(
    firebaseAuth.firestore().collection("allProducts"), {
    snapshotListenOptions: { includeMetadataChanges: true }
  });

  return (
    <div className="card-group">
      <div data-testid="desayuno">
        {allProducts && (
          <div className="row">
            {allProducts.docs.map(
              (ele) =>
                  <div
                    className="col-6"
                    style={{ maxWidth: "50%" }}
                  >
                    <div>
                      <h6 className="card-title text-center">
                        {ele.data().name} ${ele.data().price}
                      </h6>
                    </div>
                  </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
export default Products;
