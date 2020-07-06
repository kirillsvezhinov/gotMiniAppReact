import React from 'react'
import './errorMessage.css'

const errorMessage = () =>{
    return (
        <>
        <img src={process.env.PUBLIC_URL+'/img/vixx.jpg'} alt='error'></img>
        <span>error Sorry((</span>
        </>
    )
}
export default errorMessage;