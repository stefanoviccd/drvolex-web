import React, { useState } from 'react'

import './about.css';

function About() {
  var [modalClass, setModalClass]=useState("modal-closed slide-top");
  var [modalTitle, setModalTitle]=useState("Modal title");
  var [modalTxt, setModalTxt]=useState("Lorem...");
  var [cncImg, setCncImg]=useState("../oprema/cnc1.jpeg");
  var [obradaImg, setObradaImg]=useState("../oprema/obrada1.jpeg");
  var [kantImg, setKantImg]=useState("../oprema/kanterica1.jpeg");
  var [namestajImg, setNamestajImg]=useState("../oprema/namestaj1.jpeg");

  return (
  <div className='about-root'>
   <div className='grid-div first'><div className='grid-1'>
<img className="about-main-picture" src='../company/Hala.jpeg'  alt="stolarska firma Drvolex"></img></div>
<div className='grid-2'><div className='about-img-text'><h2><b>O <b>Drvolex-u</b></b></h2>
<p>Preteča firme Drvolex nastala je davne 1951. godine i od samog početka ciljala je na kvalitet. Ponosni smo na svoje korene koji su negovali prave vrednosti a ovakvi kakve nas danas možete videti, postojimo od 2012. godine.
</p>
<p>Danas, zahvaljujući savremenim mašinama, softverskim rešenjima i materijalima enormnih proizvođača, izrađujemo nameštaj visokog kvaliteta, po Vašoj želji i meri.</p>
<p className='initialy-visible'>Trudimo se da Vas uputimo na savremena rešenja i ono što je najbolje za Vas, ali na kraju poštujemo Vaše odluke. </p>

</div><div/></div>

</div>



<div className='vision-grid'>
  <div className='vision-grid-left'><h1>NAŠA VIZIJA</h1>
  <hr></hr></div>
  <div className='vision-grid-right'>
    <div className='about-img-text'> <p>Naša vizija je da postanemo kompanija koja postavlja standard u oblasti proizvodnje nameštaja i koja ne samo što prati trendove, nego ih kreira.</p></div>
  </div>
 </div>
   <div className='grid-div'><div>
<img className="about-main-picture" src='../company/hala 3.jpeg'  alt="stolarska firma Drvolex"></img>
</div>
<div className='about-text'><h1>Posetite nas u Šapcu</h1>
<p className='location-txt'>Nalazimo se u Pocerskom Pričinoviću, prigradskom naselju u opštini Šabac. Za svaku vrstu dogovora, slobodni ste da nas posetite i uverite se u kvalitet našeg rada.</p>
<button className='btn-more'>Pronađi na mapi</button>
<div className=''></div></div>
</div>
<h1>NAŠE USLUGE</h1>
<div className='grid-four'>
 <div className="services-img">
  <img   src={cncImg}  alt="stolarska firma Drvolex"  ></img><p className='services-btn'>CNC obrada<hr></hr></p>
  </div>
   <div className="services-img"><img src={namestajImg} alt="Drvolex usluge keksovanje"></img> <p className='services-btn'>Nameštaj<hr></hr></p>
  </div>
  <div className="services-img"><img src={obradaImg} alt="Drvolex usluge obrada drveta" ></img><p className='services-btn'>Obrada drveta<hr></hr></p>
  </div>
  <div className="services-img"><img src={kantImg} alt="Drvolex usluge kantovanje"></img><p className='services-btn'>Kantovanje<hr></hr></p>
  </div>
</div>
<div className='vision-grid'>
<div className='vision-grid-contact'><h1>Kontaktirajte nas</h1>
  <hr></hr></div>
  <div className='contact-img-text' > <p>Tu smo za Vas radnim danom i subotom od <b>08:00</b> do <b>17:00</b> časova.</p>
  <p className='drvolex'> Vaš Drvolex.</p></div>
</div>





</div>
  )
}

export default About