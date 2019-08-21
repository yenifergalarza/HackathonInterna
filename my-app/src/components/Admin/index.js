import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import{ ordersData} from '../../controller/Firebase/authentication';


const Admin = () => {
    const [value, loading, error] = useCollection(
        ordersData,
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      );
    return(
        <>
           <h2>ADMIN</h2> 
            <div>
      <p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && (
          <span>
         
            {value.docs.map(doc => (
              <div key={doc.id}>
                  <img src={doc.data().cart[0].image} alt="img"></img>
               <h2>{doc.data().name}</h2>
              </div>
            ))}
          </span>
        )}
      </p>
    </div>
        </>
    )
}
export default Admin