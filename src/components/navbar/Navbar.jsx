import React, {useState, useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai';
import { SiTestinglibrary } from 'react-icons/si';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";


function Navbar(props) {
  const [toggleMenu, setToggleMenu] = useState(false)
  const toggleNav = () => {
    console.log("Toogled!")
    setToggleMenu(!toggleMenu)
  }
  function toggle(e){

    props.toggleTheme();
  }
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

  }, [])
 
  document.addEventListener('DOMContentLoaded', function() {
    var current = 0;
    if(window.innerWidth > 550){
      
      for (var i = document.links.length-1; i >= 0 ; i--) {
       // for (var i = 0; i <document.links.length ; i++) {
 
        if (document.links[i].href === document.URL) {
            current = i;
        }
    }
    document.links[current].className = 'nav__link active';
    }
    
    } );

  return ( 
    <><nav className='slide-left'>
    {(toggleMenu || screenWidth > 500) && (<ul className="list nav">
   <li>
   <p className="navbar-brand">
                <img src="../company/nenadex12.png" height="40" alt="CoolBrand"></img>
            </p>
   </li>
      <li className="items"><a className="nav__link" href='/'>POČETNA</a></li>
      <li className="items"><a className="nav__link" href='/o_nama'>O NAMA</a></li>
      <li className="items"><a className="nav__link" href='/masine'>OPREMA</a></li>
      <li className="items"><a className="nav__link" href='/galerija/kuhinje'>GALERIJA</a></li>
      <li className="items"><a className="nav__link" href='/kontakt' >KONTAKT</a></li>
      <li className='items mode'>
        <div>
        <input type="checkbox" className='checkbox' id='checkbox'  onChange={(e)=> toggle(e)}/>
        <label for="checkbox" className='label' >
          <i className='fas fa-moon'><FaMoon className='icon-mode'></FaMoon></i>
          <i className='fas fa-sun'><FaSun className='icon-mode'></FaSun></i>
          <div className='ball'></div>
        </label>
        </div>
        
      </li>
    </ul>
    )}

    <button onClick={toggleNav} className="btn"><AiOutlineMenu></AiOutlineMenu></button>
   

</nav> 
<script src='NavMenuFunction.js'></script></>
  )
    
}

export default Navbar;
