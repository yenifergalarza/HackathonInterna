import React from 'react'

const Inputs = ({divInput, type, value, label, update, placeholder, icon, classValue, visibility}) => {

  return (
    <div className={divInput}>
        <input type={type} value={value} onChange={update} className={classValue}  aria-label={label} placeholder={placeholder} required />
    </div>

      )
}

export default Inputs