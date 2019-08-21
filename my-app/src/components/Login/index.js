import React, {useState} from 'react'
import Iniciar from '../Inicar-sesion';
import Registro from '../Registro/index';
import MenuOpts from '../Options'
import Header from '../header'
import Footer from '../footer'
const Login = (props) => {
    const [type, setType] = useState('Iniciar Sesión')

    return(
        <>
        <Header />
        <div className="fill-available align-items-center d-flex flex-column ">
            <ul className="nav justify-content-center" role="tablist">
              <MenuOpts click={() => {setType('Iniciar Sesión');}} options="Iniciar Sesión" aClass="nav-item nav-link active text-color"/>
              <MenuOpts click={() => {setType('Registrarse')}} options="Registrarse" aClass="nav-item nav-link text-color" />
            </ul>
            <div data-testid='opt'>
              {type === 'Iniciar Sesión' && (
                <Iniciar props={props}/>
              )}
              {type === 'Registrarse' && (
                <Registro props={props} />
              )}
            </div>
        </div>
        <Footer />
</>
    )
}
export default Login;