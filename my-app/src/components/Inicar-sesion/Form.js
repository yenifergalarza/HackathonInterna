import React, { useState } from 'react'
import Inputs from '../Input'
// import getToken from '../../controller/login';
// import getUser from '../../controller/users/get-user-id';
import { users } from '../../controller/users';
import auth from '../../controller/routes/auth';
const Form = ({logprop}) => {
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form 
    onSubmit={ e => {
      e.preventDefault()
      if(users.find(o => o.dni === dni && o.admin===false)){
        const newusers = users.map((e)=>{
          if(e.admin===false){
            return {dni:e.dni, name:e.name, saldo:e.saldo}
          }
        })
        localStorage.setItem('activeUser', JSON.stringify(newusers))
        return auth.login(() => { logprop.history.push("/productos") })
      }else if(users.find(o => o.dni === dni && o.admin===true)){
        return auth.login(() => { logprop.history.push("/reporte") })
      }

    }}
      className="col-12 mt-3 flex-column d-flex form-group" data-testid="form">

      <Inputs
        divInput="input-group form-group white border"
        type='number'
        value={dni}
        label='DNI'
        update={(e) => setDni(e.target.value)}
        placeholder='DNI'
        classValue='emailValue form-control border-none ' />
      <Inputs
        divInput="input-group form-group white border"
        type='password'
        value={password}
        label='Password'
        update={(e) => setPassword(e.target.value)}
        placeholder='Contraseña'
        classValue='passwordValue form-control border-none'
      />
      <button data-testid='login' type="submit" className='btn btn-color'>Ingresar</button>
    </form>
  )
}

export default Form;