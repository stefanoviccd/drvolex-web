import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./divider.css"

function Divider() {

    return (
        <><div className='tab nav'>
            <Link className='nav-link-d' to={"/galerija/kucniNamestaj"} style={{textDecoration:"none", color:"black"}}>Kućni nameštaj</Link>
         <Link className='nav-link-d'  to={"/galerija/kuhinje"} style={{textDecoration:"none", color:"black"}}>Kuhinje</Link>
         <Link className='nav-link-d' to={"/galerija/kupatila"} style={{textDecoration:"none", color:"black"}}>Kupatila</Link>
         <Link className='nav-link-d' to={"/galerija/plakari"} style={{textDecoration:"none", color:"black"}}>Plakari</Link>
         <Link className='nav-link-d' to={"/galerija/police"} style={{textDecoration:"none", color:"black"}}>Police</Link>
         <Link className='nav-link-d' to={"/galerija/kancelarijskiProstor"} style={{textDecoration:"none", color:"black"}}>Kancelarijski prostor</Link></div>
         
        <div className="divider"></div></>
        
    )
}

export default Divider