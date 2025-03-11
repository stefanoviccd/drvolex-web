import React, { useState, useEffect } from 'react';
import './components/header/header.css';
import './components/main-page/main-page.css';
import './components/contact/contact.css';
import './components/footer/footer.css';
import './App.css';
import './index.css';
import './components/navbar/navbar.css';


import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import MainPage from './components/main-page/MainPage';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import About from './components/about_page/About';
import NotFound from './components/not_found/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhotosPage from './components/gallery/PhotosPage';





function App() {
  const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
      );
      const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark');
          var items=document.getElementsByClassName("items");
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
 

  return (
    <div className="App">
      <div>
        <Navbar toggleTheme={toggleTheme} />

      <BrowserRouter>
      
      <Routes>
        <Route
          path="/"
          element={<>     
            <Header></Header><MainPage></MainPage></>
          }
        />
         <Route
          path="/o_nama"
          element={<><About></About></>
          
          }
        />
      
        <Route path="/kontakt" element={<Contact></Contact>} />
        <Route path="/galerija/kucniNamestaj" element={<><PhotosPage key="living-rooms" folderName={"drvolex/living-rooms"}></PhotosPage></>} />
        <Route path="/galerija/kuhinje" element={<><PhotosPage key="kitchens" folderName={"drvolex/kitchens"}></PhotosPage></>} />
        <Route path="/galerija/kupatila" element={<><PhotosPage key="bathrooms" folderName={"drvolex/bathrooms"}></PhotosPage></>} />
        <Route path="/galerija/police" element={<><PhotosPage key="shelfs" folderName={"drvolex/shelfs"}></PhotosPage></>} />
        <Route path="/galerija/kancelarijskiProstor" element={<><PhotosPage key="workspaces" folderName={"drvolex/workspaces"}></PhotosPage></>} />
        <Route path="/galerija/plakari" element={<><PhotosPage key="wardrobes" folderName={"drvolex/wardrobes"}></PhotosPage></>} />
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
        <Footer></Footer>

        

      </div>
      
    </div>
  );
}


export default App;
