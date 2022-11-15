import React from "react";
import Logout from "./Logout"
import {  
  Link
} from "react-router-dom";

function Header({user}) {
  return (
    <div className="main_head">
      <nav className="container navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Skilled Stills
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/members">Members</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/contest">Photography Contensts</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/equipment">Equipments</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/blogs">Blogs</Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <img src={user.photoURL} alt="dp" style={{"width": "40px", "borderRadius": "50%"}} referrerpolicy="no-referrer"/>
              <Logout />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
