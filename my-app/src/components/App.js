import React from 'react';
import '../css/App.css';
// import * as firebase from "firebase";
// import { useCollection } from "react-firebase-hooks/firestore";
import Routes from './Router'

const App = () => {
  return (
      <div className="container-fluid d-flex p-0 col-12 fill-available body-color align-items-center column">
        <Routes />
      </div>
    
  )
}

export default App;