import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Login from './Login'
import Home from './Home'
import Admin from './Admin/index'
import index from '../components/Productos/index'
import Carrito from '../components/Carrito/index'// import Admin from './Admin/'
// import ProtectedRoute from '../controller/routes/protected-route'
// import AdminRoute from '../controller/routes/admin-route'

const Routes = () => {
  return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/productos' component={index} />
        <Route exact path='/reporte' component={Admin} />
        <Route exact path='/cart' component={Carrito} />
        
        
        {/* <ProtectedRoute exact path='/cocina' component={Cocina} />
        <AdminRoute exact path='/admin' component={Admin} /> */}
        <Route path='*' component={() => '404 NOT FOUND'} />
      </Switch>

  )
}

export default Routes;