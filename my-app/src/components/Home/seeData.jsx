/* import{ React,ReactComponentElement} from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';


// import img from '../../images/bq.png'


const seeData = (props) => {
    const [value, loading, error] = useCollection(
        firebase.firestore().collection('hooks'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      );
  return (
    <>
    <p>
    {error && <strong>Error: {JSON.stringify(error)}</strong>}
    {loading && <span>Collection: Loading...</span>}
    {value && (
      <span>
        Collection:{' '}
        {value.docs.map(doc => (
          <React.Fragment key={doc.id}>
            {JSON.stringify(doc.data())},{' '}
          </React.Fragment>
        ))}
      </span>
    )}
  </p>
    </>
  )
}
export default seeData */