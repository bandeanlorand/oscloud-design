import React from 'react';
import { useSession } from '../../context/SessionContext';
import logo from '../../assets/oscloud-logo.svg';

const Header: React.FC = () => {
  const { session } = useSession() as { session: { user?: { email?: string } } } || null;

  return (
    <header className='sticky-top bg-light p-0'>
      <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><img src={logo} alt="OSCloud Logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="user-menu">
            {session ? (
              <>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Apps</a>
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

                <div className='d-flex'>
                  <div>{session.user?.email}</div>
                  <div>Workspace name</div>
                </div>
              </>
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Register</a>
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
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Header;
