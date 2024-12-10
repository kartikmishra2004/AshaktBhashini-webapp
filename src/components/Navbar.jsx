import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#ffffff',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
    logoBlue: {
      color: '#0078ff',
    },
    logoBlack: {
      color: '#000',
    },
    navbarLeft: {
      display: 'flex',
      alignItems: 'center',
    },
    navbarLinks: {
      display: 'flex',
      marginLeft: '20px',
      gap: '15px',
    },
    navLink: {
      color: '#333',
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'color 0.3s ease',
    },
    activeLink: {
      fontWeight: 'bold',
      color: '#0078ff',
    },
    navbarRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
  };

  return (
    <nav style={styles.navbar}>
      {/* Left Section: Logo and Links */}
      <div style={styles.navbarLeft}>
        <NavLink to="/" style={styles.logo}>
          <span style={styles.logoBlue}>Ashakt</span>
          <span style={styles.logoBlack}>Bhashini</span>
        </NavLink>

        {/* Links */}
        <div style={styles.navbarLinks}>
          <NavLink to="/" style={styles.navLink} activeStyle={styles.activeLink}>
            Home
          </NavLink>
          <NavLink
            to="/how-it-works"
            style={styles.navLink}
            activeStyle={styles.activeLink}
          >
            How it works
          </NavLink>
          <NavLink
            to="/timeline"
            style={styles.navLink}
            activeStyle={styles.activeLink}
          >
            Timeline
          </NavLink>
        </div>
      </div>

      {/* Right Section */}
      <div style={styles.navbarRight}>
        {/* Language Selector */}
        <div>EN ▼</div>
        {/* Sign In */}
        <NavLink to="/sign-in" style={styles.navLink}>
          Sign in
        </NavLink>
        {/* Download Button */}
        <button
          style={{
            backgroundColor: '#0078ff',
            color: '#ffffff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Download
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
