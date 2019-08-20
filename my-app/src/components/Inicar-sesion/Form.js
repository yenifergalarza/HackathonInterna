import React, { useState } from 'react'
import Inputs from '../Input'
// import getToken from '../../controller/login';
// import getUser from '../../controller/users/get-user-id';
import auth from '../../controller/routes/auth';

const Form = ({ logprop }) => {
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("")

  return (
    <form 
    onSubmit={ e => {
      e.preventDefault()
        auth.login(() => { logprop.history.push("/home") })
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
      {err && <p data-testid="errMsg" className='pt-3 text-danger'>*{err}</p>}
    </form>
  )
}

export default Form;