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
       </div>
        </>
    )
}
export default Admin