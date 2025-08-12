import React, { Fragment, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaBars,
  FaSignOutAlt,
  FaTachometerAlt,
  FaUser,
  FaPlus,
  FaSpinner,
  FaCheck,
  FaTimes,
  FaFileAlt,
} from 'react-icons/fa';
import logo from '../../assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/sidebar.css';

const MasterLayout = ({ children }) => {
  const contentRef = useRef(null);
  const sideNavRef = useRef(null);

  const onLogout = (e) => {
    e.stopPropagation(); 
    console.log('User logged out');
   };

  const MenuBarClickHandler = (e) => {
    e.stopPropagation(); 

    const sideNav = sideNavRef.current;
    const content = contentRef.current;

    sideNav.classList.toggle('side-nav-open');
    sideNav.classList.toggle('side-nav-close');
    content.classList.toggle('content-expand');
  };

  return (
    <Fragment>
      {/* Top Navbar */}
      <nav className="navbar navbar-dark bg-dark fixed-top d-flex justify-content-between px-3">
        <div className="d-flex align-items-center">
          <button
            onClick={MenuBarClickHandler}
            className="btn btn-outline-light me-2"
            aria-label="Toggle Menu"
          >
            <FaBars />
          </button>
          <img src={logo} alt="logo" height="30" className="me-2" />
          <span className="navbar-brand mb-0 h1">DevBoard</span>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        ref={sideNavRef}
        className="bg-dark text-white side-nav side-nav-close"
      >
        <h5 className="text-white">Menu</h5>
        <hr className="bg-secondary" />

        <NavLink to="/dashboard" className="nav-link text-white">
          <FaTachometerAlt className="me-2" />
          Dashboard
        </NavLink>

        <NavLink to="/create" className="nav-link text-white">
          <FaPlus className="me-2" />
          Create Task
        </NavLink>

        <NavLink to="/progress" className="nav-link text-white">
          <FaSpinner className="me-2" />
          Progress Tasks
        </NavLink>

        <NavLink to="/completed" className="nav-link text-white">
          <FaCheck className="me-2" />
          Completed Tasks
        </NavLink>

        <NavLink to="/cancel" className="nav-link text-white">
          <FaTimes className="me-2" />
          Cancelled Tasks
        </NavLink>

        <NavLink to="/new" className="nav-link text-white">
          <FaFileAlt className="me-2" />
          New Page
        </NavLink>

        <NavLink to="/profile" className="nav-link text-white">
          <FaUser className="me-2" />
          Profile
        </NavLink>

        <button onClick={onLogout} className="btn btn-outline-light mt-3 w-100">
          <FaSignOutAlt className="me-2" />
          Logout
        </button>
      </aside>

      {/* Main Content Area */}
      <main
        ref={contentRef}
        className="content bg-light p-4"
        style={{ marginTop: '56px' }}
      >
        {children}
      </main>
    </Fragment>
  );
};

export default MasterLayout;
