import React from 'react';


import { NavLink } from 'react-router-dom';

export default function TemporaryDrawer() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="/" exact={true} activeClassName="is-active" id="navTitle">
        <a className="navbar-brand" href="#">AndresPuentes</a>
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
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
  );
}