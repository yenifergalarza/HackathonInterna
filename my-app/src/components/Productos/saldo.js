import React from 'react'

const Saldo = () => {
    return(
        <>
        <div className="green justify-content-around align-items-center w-100 d-flex text-white">
            <p className="my-2">Hola Juan, tu saldo es: </p>
            <p className="my-2">S/.400.00</p>
        </div>
        <div className="border-green justify-content-around align-items-center w-100 d-flex">
            <p className="my-2">Ganancia: </p>
            <p className="my-2">S/.00.00</p>
        </div>
        </>
    )
}
export default Saldo;