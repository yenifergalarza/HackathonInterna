import React from 'react'

const Footer = () => {
    return(
        <footer className="py-4 footer w-100">
        <div className="d-flex col-12 text-center">
        <div className='col-6 d-flex column nosotros'>
            <p className='font-weight-bold'>Nosotros</p>
            <small className='left'>Nuestra visión, misión, pilares y valores </small>
            <small className='left'>Nuestra Gestión  Perú</small>
            <small className='left'>¿Donde estamos?</small>
        </div>
        <div className='col-6 d-flex column'>
            <p className='font-weight-bold'>Marcas</p>
            <small >Consumo masivo</small>
            <small >B2B</small>
            <small >Vitapro</small>
        </div>
        </div>
      </footer>
    )
}
export default Footer;