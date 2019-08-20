import React, {useState} from 'react'
import Iniciar from '../Inicar-sesion';
import Registro from '../Registro/index';
import MenuOpts from '../Options'
import Header from '../header'
const Login = () => {
    const [type, setType] = useState('Iniciar Sesión')

    return(
        <>
        <Header />
        <div className="fill-available align-items-center d-flex flex-column ">
            <ul className="nav justify-content-center "  role="tablist">
              <MenuOpts click={() => {setType('Iniciar Sesión');}} options="Iniciar Sesión" aClass="nav-link active text-color"/>
              <MenuOpts click={() => {setType('Registrarse')}} options="Registrarse" aClass="nav-link text-color" />
            </ul>
            <div data-testid='opt'>
              {type === 'Iniciar Sesión' && (
                <Iniciar />
              )}
              {type === 'Registrarse' && (
                <Registro  />
              )}
            </div>
        </div>
</>
    )
}
export default Login;