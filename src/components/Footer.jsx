import React from "react";
import {  
  Link
} from "react-router-dom";

function Footer() {
  return (
    <div>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-muted">&copy; Skilled Stills | All Right Reserved 2022 </p>

          <a
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <h4 className="text-center font-weight-bold">Skilled Stills</h4>
          </a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <a href="/" class="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Photography Contents
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Gallery
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Equipments
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Blogs
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Members
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
