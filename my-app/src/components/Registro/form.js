import React, { useState } from 'react'
import Inputs from '../Input'
// import getToken from '../../controller/login';
// import getUser from '../../controller/users/get-user-id';
import auth from '../../controller/routes/auth';

const RegisterForm = ({ logprop }) => {
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  const [direccion, setDireccion] = useState("");
  const [planta, setPlanta] = useState("");
  const [distrito, setDistrito] = useState("");
  const [err, setErr] = useState("")

  return (
    <form 
    onSubmit={ e => {
      e.preventDefault()
        auth.login(() => { logprop.history.push("/home") })
    }}
      className="col-12 flex-column d-flex form-group" data-testid="form">

      <Inputs
        divInput="input-group form-group white border"
        type='number'
        value={dni}
        label='DNI'
        update={(e) => setDni(e.target.value)}
        placeholder='DNI'
        classValue='emailValue form-control border-none'/>
        <Inputs
        divInput="input-group form-group white border"
        type='text'
        value={direccion}
        label='Direccion'
        update={(e) => setDireccion(e.target.value)}
        placeholder='Dirección'
        classValue='emailValue form-control border-none' />
        <Inputs
        divInput="input-group form-group white border"
        type='text'
        value={distrito}
        label='Distrito'
        update={(e) => setDistrito(e.target.value)}
        placeholder='Distrito'
        classValue='emailValue form-control border-none ' />
        <select class="custom-select input-group form-group white">
            <option selected>Planta</option>
            <option value="Nicovita">Nicovita</option>
            <option value="Teal">Teal</option>
            <option value="Molino Santa Rosa">Molino Santa Rosa</option>
            <option value="Sidsur">Sidsur</option>
        </select>
      <Inputs
        divInput="input-group form-group white border"
        type='password'
        value={password}
        label='Password'
        update={(e) => setPassword(e.target.value)}
        placeholder='Contraseña'
        classValue='passwordValue form-control border-none'
      />
      <button data-testid='login' type="submit" className='btn btn-color'>Registrarme</button>
      {err && <p data-testid="errMsg" className='pt-3 text-danger'>*{err}</p>}
    </form>
  )
}

export default RegisterForm;