import React, { Fragment, useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaBars,
  FaSignOutAlt,
  FaUser,
  FaTachometerAlt,
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

  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.profile-dropdown-btn')) {
        setShowProfile(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

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

  const toggleProfileDropdown = (e) => {
    e.stopPropagation();
    setShowProfile(!showProfile);
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

        {/* Profile Icon */}
        <div className="position-relative">
          <button
            onClick={toggleProfileDropdown}
            className="btn btn-outline-light d-flex align-items-center profile-dropdown-btn"
          >
            <FaUser className="me-1" />
            <span>Ovi</span>
          </button>

          {showProfile && (
            <div
              className="position-absolute bg-white text-dark shadow p-2 rounded"
              style={{ right: 0, top: '100%', minWidth: '200px', zIndex: 1000 }}
            >
              <div className="mb-2 d-flex flex-column align-items-start">
                <strong>Ovi H</strong>
                <span className="text-muted" style={{ fontSize: '12px' }}>
                  ovi@example.com
                </span>
              </div>
              <NavLink to="/profile" className="dropdown-item text-dark">
                Profile Settings
              </NavLink>
              <NavLink to="/settings" className="dropdown-item text-dark">
                Settings
              </NavLink>
              <button onClick={onLogout} className="dropdown-item text-danger">
                Logout
              </button>
            </div>
          )}
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
          <FaTachometerAlt className="me-2" /> Dashboard
        </NavLink>
        <NavLink to="/create" className="nav-link text-white">
          <FaPlus className="me-2" /> Create Task
        </NavLink>
        <NavLink to="/progress" className="nav-link text-white">
          <FaSpinner className="me-2" /> Progress Tasks
        </NavLink>
        <NavLink to="/completed" className="nav-link text-white">
          <FaCheck className="me-2" /> Completed Tasks
        </NavLink>
        <NavLink to="/cancel" className="nav-link text-white">
          <FaTimes className="me-2" /> Cancelled Tasks
        </NavLink>
        <NavLink to="/new" className="nav-link text-white">
          <FaFileAlt className="me-2" /> New Page
        </NavLink>
      </aside>

      {/* Main Content */}
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
