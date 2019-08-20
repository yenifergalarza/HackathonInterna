import React from 'react';
import Form from './Form';
import ImgLogin from './ImgLogin';
// import img from '../../images/bq.png'


const Iniciar = (props) => {

  return (
    <>
      <main data-testid="login" className='container d-flex fill-available justify-content-center align-items-center'>
        <div className="py-3 d-flex align-items-center flex-column">
          <Form logprop={props} />
        </div>
      </main>
    </>
  )
}
export default Iniciar