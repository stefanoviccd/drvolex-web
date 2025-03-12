import React from "react";
import { NavLink } from "react-router-dom";
import "./divider.css";

function Divider() {

  return (
    <>
      <div className="tab nav">
        <NavLink
          className="nav-link-d"
          activeClassName="active"
          to={"/galerija/kucniNamestaj"}
          style={{ textDecoration: "none", color: "black" }}
        >
          Kućni nameštaj
        </NavLink>
        <NavLink
          className="nav-link-d"
          activeClassName="active"
          to={"/galerija/kuhinje"}
          style={{ textDecoration: "none", color: "black" }}
        >
          Kuhinje
        </NavLink>
        <NavLink
          className="nav-link-d"
          activeClassName="active"
          to={"/galerija/kupatila"}
          style={{ textDecoration: "none", color: "black" }}
        >
          Kupatila
        </NavLink>
        <NavLink
          className="nav-link-d"
          activeClassName="active"
          to={"/galerija/plakari"}
          style={{ textDecoration: "none", color: "black" }}
        >
          Plakari
        </NavLink>
        <NavLink
          className="nav-link-d"
          activeClassName="active" 
          to={"/galerija/police"}
          style={{ textDecoration: "none", color: "black" }}
        >
          Police
        </NavLink>
        <NavLink
          className="nav-link-d"
          activeClassName="active" 
          to={"/galerija/kancelarijskiProstor"}
          style={{ textDecoration: "none", color: "black" }}
        >
          Kancelarijski prostor
        </NavLink>
      </div>

      <div className="divider"></div>
    </>
  );
}

export default Divider;
