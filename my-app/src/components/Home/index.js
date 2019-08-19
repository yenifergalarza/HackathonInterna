import React from 'react'
import logo from '../../img/1280px-Alicorp.svg.png'
const Home = () => {
    return(
        <div className="header">
        <div> 
            <a href="#"><img src={logo}  alt='img'className="logo"/></a> 
        </div>
        <div class="menu">
            <div>
                <a href="/alicorp/nosotros/vision-mision-y-valores.html">Nosotros</a>
                <span>
                    <ul>
                        <li><a href="/alicorp/nosotros/vision-mision-y-valores.html"  title="Nuestra visión, misión, pilares y valores">Nuestra visión, misión, pilares y valores</a></li>
                        <li><a href="/alicorp/nosotros/nuestra-gestion-en-Peru.html"  title="Nuestra Gestión en Perú">Nuestra Gestión en Perú</a></li>
                        <li><a href="/alicorp/nosotros/donde-estamos.html"  title="¿Dónde estamos?">¿Dónde estamos?</a></li>
                    </ul>
                </span>
            </div>
            <div>
                <a href="/alicorp/marcas/consumo-masivo.html">Marcas</a>
                <span>
                    <ul>
                        <li><a href="/alicorp/marcas/consumo-masivo.html"  title="Consumo Masivo">Consumo Masivo</a></li>
                        <li><a href="/alicorp/marcas/productos-industriales.html"  title="B2B">B2B</a></li>
                        <li><a href="/alicorp/marcas/nutricion-animal.html"  title="Vitapro">Vitapro</a></li>
                    </ul>
                </span>
            </div>
            <div>
                <a href="/alicorp/responsabilidad-social/nuestro-modelo-de-desarrollo.html">Desarrollo Sostenible</a>
                <span>
                    <ul>
                        <li><a href="/alicorp/responsabilidad-social/nuestro-modelo-de-desarrollo.html"  title="Nuestro modelo de Desarrollo Sostenible">Nuestro modelo de Desarrollo Sostenible</a></li>
                        <li><a href="/alicorp/desarrollo-sostenible/reporte-de-sostenibilidad.html"  title="Reporte de Sostenibilidad">Reporte de Sostenibilidad</a></li>
                    </ul>
                </span>
            </div>
        <div><a href="https://www.alicorp.com.pe/inversionistas">Inversionistas</a></div></div>
        </div>
    )
}
export default Home;