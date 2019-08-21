import React from 'react'

const Saldo = ({object,total}) => {
    return(
        <>
        <div className="green top2 fixed justify-content-around align-items-center w-100 d-flex text-white">
            <p className="my-2">{`Hola ${object.name}, tu saldo es: `}</p>
            <p className="my-2">S/.200.00</p>
        </div>
        <div className="border-green top3 fixed justify-content-around align-items-center w-100 d-flex">
            <p className="my-2">Ganancia: </p>
            <p className="my-2">S/{total}</p>
        </div>
        </>
    
    )
}
export default Saldo;