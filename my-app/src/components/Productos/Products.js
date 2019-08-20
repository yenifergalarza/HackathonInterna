/* import React from 'react';
import { useCollection } from "react-firebase-hooks/firestore";

import firebaseAuth from '../../controller/Firebase/authentication'
import Nav from '../Productos/Nav'
import Index from '../Productos/index'
import EachProduct from "../EachProduct.jsx"
const Products = () => {
  const [allProducts] = useCollection(
    firebaseAuth.firestore().collection("allProducts"), {
    snapshotListenOptions: { includeMetadataChanges: true }
  });

  return (
    <>
  
    <div className="displayFlex">
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && (
              <progress class="progress is-medium is-dark" max="100">
                45%
              </progress>
            )}
            {state === "pending" && (
              <div style={{ padding: 2 + "em" }}>
                {value && (
                  <div
                    className="r"
                    style={{ padding: 2 + "em" }}
                  >
                    {value.docs.map(doc => (
                      <EachProduct
                        key={doc.id}
                        name={doc.data().name}
                        time={doc.data().time}
                        id={doc.id}
                        cart={doc.data().cart}
                        status={doc.data().status}
                      ></EachProduct>
                    ))}
                  </div>
                )}
              </div>
            )}

            {state === "cooking" && (
              <div style={{ padding: 2 + "em" }}>
                {valueCooking && (
                  <div
                    className=""
                    style={{ padding: 2 + "em" }}
                  >
                    {valueCooking.docs.map(doc => (
                      <EachProduct
                        key={doc.id}
                        name={doc.data().name}
                        time={doc.data().time}
                        id={doc.id}
                        cart={doc.data().cart}
                        status={doc.data().status}
                      ></EachProduct>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {state === "finished" && (
            <div>
              {value && (
                <div
                  className=""
                  style={{ padding: 2 + "em" }}
                >
                  {valueFinished && (
                    <div
                      className=""
                      style={{ padding: 2 + "em" }}
                    >
                      {valueFinished.docs.map(doc => (
                        <EachProduct
                          key={doc.id}
                          name={doc.data().name}
                          time={doc.data().time}
                          id={doc.id}
                          cart={doc.data().cart}
                          status={doc.data().status}
                        ></EachProduct>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
    </>
  )
}
export default Products;
 */