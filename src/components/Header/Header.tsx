import React from 'react';
import { useSession } from '../../context/SessionContext';
import logo from '../../assets/oscloud-logo.svg';
// import { Link } from "react-router-dom";
import supabase from "../../supabase";
import { NavLink } from "react-router-dom";
import "./header.scss"; // Add styling for the menu
const Header: React.FC = () => {
  const { session } = useSession() as { session: { user?: { email?: string } } } || null;

  return (
    <header className='sticky-top'>
      <div className='container-fluid p-0 '>
        <nav className="navbar navbar-expand-lg bg-light px-2 py-0" data-bs-theme="light">
          <div className="container-fluid container-fluid d-flex align-items-center justify-content-start">
            <div className='border-end border-1  p-2'>
              <a className="navbar-brand d-flex align-items-center" href="#"><img src={logo} alt="OSCloud Logo" /></a>
            </div>

            {/* <div className="user-menu d-flex align-items-center  ps-2"> */}
            <button className="navbar-toggler ms-auto mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {session ? (
              <>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink
                        to="/Apps"
                        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                        Apps
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Supports</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Documentations</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#">Settings</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#">Admin</a>
                    </li>
                  </ul>
                </div>

                <div className='d-flex  d-flex align-items-center justify-content-start'>
                <div className="collapse navbar-collapse" id="navbarRight">
                  <ul className="navbar-nav me-auto1">
                    <li className="nav-item secondary">
                      <a className="nav-link" href="#">Package Name V</a>
                    </li>
                    <li className='border-end border-1 px-1 mx-1'></li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{session.user?.email}</a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Some action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" onClick={() => supabase.auth.signOut()}>Sign Out</a>
                      </div>
                    </li>
                    <li className='border-end border-1 px-1 mx-1'></li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Workspace name</a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Some action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>

                  </ul>
                </div>
                </div>
              </>
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item">
                  {/* <a className="" aria-current="page" href="#">Login</a> */}
                  {/* <Link className="nav-link" to="/auth/sign-in">Login</Link> */}
                  <NavLink
                    to="/auth/sign-in"
                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                    Login
                  </NavLink>

                </li>
                <li className="nav-item">
                  <NavLink
                    to="/auth/sign-up"
                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Support</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Documentation</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Other apps</a>
                </li>
              </ul>
            )}
            {/* </div> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
