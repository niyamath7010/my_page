import React from "react"
import { NavLink } from "react-router-dom";

const Navbar=()=>{
    return(
        <>
        <div classNameName="container-fluid nav_bg">
          <div classNameName="row">
            <div classNameName="col-10 mx-auto">

            
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <NavLink className="navbar-brand"  to="#">Niyamath</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-2">
        <li className="nav-item">
          <NavLink    className="nav-link active"  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/service">Service</NavLink>
        </li>
       
       
      </ul>
     
    </div>
  </div>
</nav>
  </div>
          </div>
        </div>

        </>

    )
}

export default Navbar;