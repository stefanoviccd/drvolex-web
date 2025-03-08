import React from 'react'
import { FaAddressCard } from 'react-icons/fa';
import { BsTelephoneOutbound } from 'react-icons/bs';
import { RiMailSendLine } from 'react-icons/ri';
function Contact() {
  return (
   <div className='contactCover'>
     <div className='contact_info scale-up-hor-center'>
       <div className='details'><div ><FaAddressCard className='icon'></FaAddressCard></div><div className='contact-text'><p>
       Dragoljuba Kulezića Boljševika 49, 15000 Šabac
       </p>
         </div></div>
       <div className='details'>   <div className='details'><BsTelephoneOutbound className='icon-tel'></BsTelephoneOutbound>
       </div><div className='short-text contact-text '><p>064/2099225 Nenad Despotović 065/2481177 Vlada Despotović</p></div></div>
         <div className='details'>   <div className='details'><RiMailSendLine className='icon-mail'>
          </RiMailSendLine></div>
          <div className='short-text email-text contact-text'><p>drvolex.sabac@gmail.com</p>
          <button className='send-mail-btn'><a href="mailto: drvolex.sabac@gmail.com">Pošalji poruku</a></button></div>
        </div>
       
       </div>
    </div>
      
  )
}

export default Contact