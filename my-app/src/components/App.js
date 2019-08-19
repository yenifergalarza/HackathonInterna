import React from 'react';
import '../css/App.css';
import Products from '../components/Products'
// import * as firebase from "firebase";
// import { useCollection } from "react-firebase-hooks/firestore";
import Routes from './Router'

const App = () => {
  return (
      <div className="container-fluid d-flex col-12 fill-available body-color align-items-center column">
        <Routes />
        <Products/>
      </div>
    
  )
}

export default App;