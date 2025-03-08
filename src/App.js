
import React, { useState, useEffect } from 'react';
import './components/header/header.css';
import './components/main-page/main-page.css';
import './components/contact/contact.css';
import './components/footer/footer.css';
import './App.css';
import './index.css';
import './components/navbar/navbar.css';
import './components/not_found/not-found.css';


import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import MainPage from './components/main-page/MainPage';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import About from './components/about_page/About';
import NotFound from './components/not_found/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhotosPage from './components/gallery/PhotosPage';
import Machinery from './components/machinery/Machinery';





function App() {
  const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
      );
      const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark');
          var items=document.getElementsByClassName("items");
          console.log(items);
          items.className="items items-dark";
        } else {
          setTheme('light');
    var items= document.getElementsByClassName("items");
    items.classList.remove("items-dark");
    
    
        }
      };
      useEffect(() => {
      localStorage.setItem('theme', theme);
       if (theme === 'light'){
          document.body.classList.remove("dark");
  
      
      }
      else{
        document.body.classList.add("dark");

      }
        
      
      }, [theme]);
  const [bathroomImages]=useState([
    {name: '../kupatila/kupatilo1.jpg'},
    {name: '../kupatila/kupatilo2.jpg'},
    {name: '../kupatila/kupatilo3.jpg'},
    {name: '../kupatila/kupatilo4.jpg'},
    {name: '../kupatila/kupatilo5.jpg'},
    {name: '../kupatila/kupatilo6.jpg'},
    {name: '../kupatila/kupatilo7.jpg'}
  
  ]);
  const [shelfImages]=useState([
    {name: '../police/polica10.jpg'},
    {name: '../police/polica11.jpg'},
    {name: '../police/polica12.jpg'},
    {name: '../police/polica13.jpg'},
    {name: '../police/polica16.jpg'},
    {name: '../police/polica1.jpg'},
    {name: '../police/polica7.jpg'},
  
  
  ]);
  const [officeImages]=useState([
    {name: '../kancelarijski_prostor/kp1.jpg'},
    {name: '../kancelarijski_prostor/kp2.jpg'},
    {name: '../kancelarijski_prostor/kp5.jpg'},
    {name: '../kancelarijski_prostor/kp6.jpg'},
    {name: '../kancelarijski_prostor/kp9.jpg'},
    {name: '../kancelarijski_prostor/kp10.jpg'},
    {name: '../kancelarijski_prostor/kp11.jpg'},
    {name: '../kancelarijski_prostor/kp12.jpg'},
    {name: '../kancelarijski_prostor/kp13.jpg'},
    {name: '../kancelarijski_prostor/kp14.jpg'},
    {name: '../kancelarijski_prostor/kp18.jpg'},  
    {name: '../kancelarijski_prostor/kp8.jpg'},
    {name: '../kancelarijski_prostor/kp15.jpg'},
    {name: '../kancelarijski_prostor/kp20.jpeg'},
    {name: '../kancelarijski_prostor/kp21.jpeg'},
    {name: '../kancelarijski_prostor/kp22.jpeg'},
    {name: '../kancelarijski_prostor/kp24.jpeg'},
    {name: '../kancelarijski_prostor/kp25.jpeg'},
    {name: '../kancelarijski_prostor/kp29.jpeg'},
    {name: '../kancelarijski_prostor/kp26.jpeg'},
    {name: '../kancelarijski_prostor/kp27.jpeg'},
    {name: '../kancelarijski_prostor/kp28.jpeg'},
    {name: '../kancelarijski_prostor/kp30.jpeg'},
    {name: '../kancelarijski_prostor/kp19.jpeg'},
    {name: '../kancelarijski_prostor/kp31.jpeg'},
    {name: '../kancelarijski_prostor/kp33.jpeg'}
  
  ]);
  const [kitchenImages]=useState([
    {name: 'https://res.cloudinary.com/drvolex/image/upload/v1741387089/kitchen_no2_uqntop.jpg'},
  
  
  ]);
  const [wardrobeImages]=useState([    
    {name: '../plakari/plakar5.jpg'},
    {name: '../plakari/plakar3.jpg'},
    {name: '../plakari/plakar7.jpg'},
    {name: '../plakari/plakar9.jpg'},
    {name: '../plakari/plakar15.jpg'},
    {name: '../plakari/plakar16.jpg'},
    {name: '../plakari/plakar17.jpg'},
    {name: '../plakari/plakar18.jpeg'},
    {name: '../plakari/plakar19.jpeg'},
    {name: '../plakari/plakar20.jpeg'}
  
  ]);
  const [opremaImages]=useState([    
    {name: '../oprema/cnc1.jpeg'},
    {name: '../oprema/cnc2.jpeg'},
    {name: '../oprema/kanterica1.jpeg'},
    {name: '../oprema/kanterica2.jpeg'},
    {name: '../oprema/obrada1.jpeg'},
    {name: '../oprema/obrada2.jpeg'},
    {name: '../oprema/opr1.jpeg'},

  ]);
  const [homeImages]=useState([    
    {name: '../razno/dom1.jpg'},
    {name: '../razno/dom3.jpg'},
    {name: '../razno/dom4.jpg'},
    {name: '../razno/dom6.jpg'},
    {name: '../razno/dom8.jpg'},
    {name: '../razno/dom9.jpg'},
    {name: '../razno/dom10.jpg'},
    {name: '../razno/dom12.jpg'},
    {name: '../razno/dom13.jpg'},
    {name: '../razno/polica18.jpeg'},
    {name: '../razno/polica20.jpeg'},
    {name: '../razno/kn.jpeg'},
    {name: '../razno/kn2.jpeg'},
    {name: '../razno/kn3.jpeg'},
    {name: '../razno/kp32.jpeg'}
  ]);
  
 

  return (
    <div className="App">
      <div>
        <Navbar toggleTheme={toggleTheme} />

      <BrowserRouter>
      
      <Routes>
        <Route
          path="/"
          element={<>     <Header></Header><MainPage></MainPage></>
          
          }
        />
         <Route
          path="/o_nama"
          element={<><About></About></>
          
          }
        />
        <Route path="/masine" element={<Machinery></Machinery>} />
        
        <Route path="/kontakt" element={<Contact></Contact>} />
        <Route path="/galerija/kuhinje" element={<><PhotosPage photos={kitchenImages}   alt={"Drvolex kuhinje"} page={1}></PhotosPage></>} />
        <Route path="/galerija/kupatila" element={<><PhotosPage photos={bathroomImages} alt={"Drvolex kupatila"} page={1}></PhotosPage></>} />
        <Route path="/galerija/police" element={<><PhotosPage photos={shelfImages} alt={"Drvolex police"} page={1}></PhotosPage></>} />
        <Route path="/galerija/kancelarijskiProstor" element={<><PhotosPage photos={officeImages} alt={"Drvolex kancelarijski nameštaj"}> page={1}</PhotosPage></>} />
        <Route path="/galerija/kucniNamestaj" element={<><PhotosPage photos={homeImages} alt={"Drvolex kućni nameštaj"} page={1}></PhotosPage></>} />
        <Route path="/galerija/plakari" element={<><PhotosPage photos={wardrobeImages} alt={"Drvolex plakari"} page={1}></PhotosPage></>} />
        <Route path="/galerija/oprema" element={<><PhotosPage photos={opremaImages} alt={"Drvolex oprema"} page={1}></PhotosPage></>} />
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
        <Footer></Footer>

        

      </div>
      
    </div>
  );
}


export default App;
