import React from 'react';
import { useCollection } from "react-firebase-hooks/firestore";

import firebaseAuth from '../../controller/Firebase/authentication'
import Nav from '../Productos/Nav'
import Index from '../Productos/index'

const Products = () => {
  const [allProducts] = useCollection(
    firebaseAuth.firestore().collection("allProducts"), {
    snapshotListenOptions: { includeMetadataChanges: true }
  });

  return (
    <>
    <Nav/>
    <Index/>
    <div className="card-group">
      <div data-testid="desayuno">
        {allProducts && (
          <div className="row m-5">
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
                      <img></img>
                    </div>
                  </div>
            )}
          </div>
        )}
      </div>
    </div>
    </>
  )
}
export default Products;
