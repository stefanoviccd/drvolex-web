import React, { useState, useEffect } from "react";
import "./components/header/header.css";
import "./components/main-page/main-page.css";
import "./components/contact/contact.css";
import "./components/footer/footer.css";
import "./App.css";
import "./index.css";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import MainPage from "./components/main-page/MainPage";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import About from "./components/about_page/About";
import NotFound from "./components/not_found/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhotosPageNew from "./components/gallery/PhotosPageNew";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  var items = document.getElementsByClassName("items");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      items.className = "items items-dark";
    } else {
      setTheme("light");
      items.classList.remove("items-dark");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <div className="app-container">
      <main className="content-wrapper">
        <Navbar toggleTheme={toggleTheme} />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header></Header>
                  <MainPage></MainPage>
                </>
              }
            />
            <Route
              path="/o_nama"
              element={
                <>
                  <About></About>
                </>
              }
            />

            <Route path="/kontakt" element={<Contact></Contact>} />
            <Route
              path="/galerija/kucni-namestaj"
              element={
                <>
                  <PhotosPageNew
                    key="living-rooms"
                    folderName={"drvolex/living-rooms"}
                  ></PhotosPageNew>
                </>
              }
            />
            <Route
              path="/galerija/kuhinje"
              element={
                <>
                  <PhotosPageNew
                    key="kitchens"
                    folderName={"drvolex/kitchens"}
                  ></PhotosPageNew>
                </>
              }
            />
            <Route
              path="/galerija/kupatila"
              element={
                <>
                  <PhotosPageNew
                    key="bathrooms"
                    folderName={"drvolex/bathrooms"}
                  ></PhotosPageNew>
                </>
              }
            />
            <Route
              path="/galerija/police"
              element={
                <>
                  <PhotosPageNew
                    key="shelfs"
                    folderName={"drvolex/shelfs"}
                  ></PhotosPageNew>
                </>
              }
            />
            <Route
              path="/galerija/kancelarijski-prostor"
              element={
                <>
                  <PhotosPageNew
                    key="workspaces"
                    folderName={"drvolex/workspaces"}
                  ></PhotosPageNew>
                </>
              }
            />
            <Route
              path="/galerija/plakari"
              element={
                <>
                  <PhotosPageNew
                    key="wardrobes"
                    folderName={"drvolex/wardrobes"}
                  ></PhotosPageNew>
                </>
              }
            />
            <Route path="/*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
