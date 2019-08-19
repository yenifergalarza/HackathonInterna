import React from 'react'
import Inputs from '../Input'
const RegisterScreen = () => {
  return (
    <div>
            <Inputs
        divInput="input-group form-group radius-50 white"
        type='email'
        // value={email}
        label='Email'
        // update={(e) => setEmail(e.target.value)}
        placeholder='Email'
        icon='fas fa-user'
        classValue='emailValue form-control border-none radius-50'
        visibility="input-group-append border-none radius-50" />
      <Inputs
        divInput="input-group form-group radius-50 white"
        type='password'
        // value={password}
        label='Password'
        // update={(e) => setPassword(e.target.value)}
        placeholder='Password'
        icon='fas fa-lock'
        classValue='passwordValue form-control border-none radius-50'
        visibility="input-group-append border-none radius-50"
      />
    </div>
  )
              
}
              
  export default RegisterScreen;