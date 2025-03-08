import React from 'react';
import {RiMapPin2Line} from "react-icons/ri";
import {SiGooglemaps} from "react-icons/si";
import './footer.css';

function Footer() {
 
       return (
        <div className='footer-div'>
            <div className='footer-logo'>
               <div><img className='f-logo-img' src='../company/nenadex12.png' alt='Drvolex logo'></img></div> 
                
               
            </div>
            <div className='info'><p className='footer-title'>Kontaktirajte nas</p>drvolex.sabac@gmail.com<br></br>064/2099225<br></br>065/2481177<br></br>
            <a href='https://www.google.com/maps/place/Dragoljuba+Kulezi%C4%87a+-+Bolj%C5%A1evika,+Pocerski+Pri%C4%8Dinovi%C4%87/@44.725175,19.7104086,16.26z/data=!4m5!3m4!1s0x475bcb4ca8dea913:0xd7228e49d18d30f1!8m2!3d44.7255232!4d19.7122836'>Pronađite nas na mapi  </a><SiGooglemaps></SiGooglemaps></div>
               
    <div className='info tel'><p className='footer-title'>Linkovi</p><p><a href='/pocetna'>Početna</a><br></br>
    <a href='/o_nama'>O nama</a><br></br>
    <a href='/galerija/kuhinje'>Galerija</a><br></br>
    <a href='/kontakt'>Kontakt</a><br></br></p></div>
    <div className='info'><p className='footer-title'>Copyright</p>
    <p>Drvolex, 2022<br></br>All rights reserved</p>
    
    </div>
</div>
    );

}

export default Footer;
