import React from 'react';


import { NavLink } from 'react-router-dom';

export default function TemporaryDrawer() {

  return (
    <div className="header">
      <div className="pageName">
        AndresPuentes
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="nav-link text-muted">Web Developer</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="right navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink to="/" exact={true} activeClassName="is-active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" activeClassName="is-active">
                <a className="nav-link" href="#">Projects</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/help" activeClassName="is-active">
                <a className="nav-link" href="#">Contact</a>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}