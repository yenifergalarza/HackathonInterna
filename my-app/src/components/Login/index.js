import React, {useState} from 'react'
import Iniciar from '../Inicar-sesion';
import Registro from '../Registro';
import MenuOpts from '../Options'
const Login = () => {
    const [type, setType] = useState('Iniciar Sesión')
    return(
        <div>
            <ul className="nav nav-tabs w-100" role="tablist">
              <MenuOpts click={() => setType('Iniciar Sesión')} options="Desayuno" aClass="nav-link active" />
              <MenuOpts click={() => setType('Registarse')} options="Almuerzo" aClass="nav-link" />
            </ul>
            <div data-testid='opt' className="card-columns">
              {type === 'Iniciar Sesión' && (
                <Iniciar />
              )}
              {type === 'Registrarse' && (
                <Registro  />
              )}
            </div>
        </div>

    )
}
export default Login;