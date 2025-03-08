import React from 'react'
import "../machinery/machinery.css"

function removeHoverClass(){
var elem=document.getElementsByClassName("hover");
elem.className = 'snip1482';


}

function Machinery() {
  return (<> <div className='machinery-header'><h1 className='h1'>Ulažemo u kvalitet<hr></hr></h1>
  <h3>Jer kvalitet se uvek isplati</h3>
  </div>

 
  <div class="box-container">
  <div class="box">
    <img  className="img" src="../oprema/cnc1.jpeg"></img>
  </div>
  <div class="box">
    <img  className="img" src="../oprema/kanterica1.jpeg"></img>
  </div>
  <div class="box">
    <img  className="img" src="../oprema/opr1.jpeg"></img>
  </div>
  <div class="box">
    <img  className="img" src="../oprema/kantericaStvarno.jpeg"></img>
  </div>
</div>
<div class="box-container">
   <div class="box">
    <img  className="img" src="../oprema/oprema.jpeg"></img>
  </div>
  <div class="box">
    <img  className="img" src="../oprema/oprema1.jpeg"></img>
  </div>
  <div class="box">
    <img  className="img" src="../oprema/oprema2.jpeg"></img>
  </div>
  <div class="box">
    <img  className="img" src="../oprema/oprema3.jpeg"></img>
  </div>
</div>

<div className='mobile-container'>
<img className="mobile-image" src="../oprema/cnc1.jpeg" alt="drvolex oprema"></img>
<img className="mobile-image"src="../oprema/kanterica1.jpeg" alt="drvolex oprema"></img>
<img className="mobile-image"src="../oprema/opr1.jpeg" alt="drvolex oprema"></img>
<img className="mobile-image"src="../oprema/kantericaStvarno.jpeg" alt="drvolex oprema"></img>
<img className="mobile-image"src="../oprema/oprema.jpeg" alt="drvolex oprema"></img>
<img className="mobile-image"src="../oprema/oprema1.jpeg" alt="drvolex oprema"></img>
<img className="mobile-image"src="../oprema/oprema2.jpeg" alt="drvolex oprema"></img>
<img className="mobile-image"src="../oprema/oprema3.jpeg" alt="drvolex oprema"></img>
</div>


  </>

  )
}

export default Machinery