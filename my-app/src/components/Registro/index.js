import React from 'react'
import Form from './form'
const Register = ({props}) => {
    return(
        <main data-testid="login" className='mt-2'>
        <div className="">
          <Form logprop={props} />
        </div>
      </main>
      )
}
export default Register;