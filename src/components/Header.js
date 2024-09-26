import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate for navigation
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import userIcon from "../user-50.png"; // Import user icon

const Header = ({ className = "" }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login
  const navigate = useNavigate();

  // Check login status from localStorage or other auth mechanism
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    // Log the user out and redirect
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className={[styles.header, className].join(" ")}>
      <nav className={styles.container}>
        <div className={styles.linkmargin}>
          <div className={styles.link}>
            <a className={styles.prophecyproperty}>ProphecyProperty</a>
          </div>
        </div>
        <nav className={styles.background}>
          <nav className={styles.nav}>
            <div className={styles.link1}>
              <a className={styles.buy}>Buy</a>
            </div>
            <div className={styles.link2}>
              <a className={styles.buy}>Visualisations</a>
            </div>
          </nav>
        </nav>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <div className={styles.container3}>
              {isLoggedIn ? (
                // User Icon redirects to dashboard
                <div className={styles.userIconContainer}>
                  <Link to="/dashboard" className={styles.userIcon}>
                    <img
                      src={userIcon}
                      alt="User Dashboard"
                      className={styles.userIconImage}
                    />
                  </Link>
                </div>
              ) : (
                // "Sign in" button if user is not logged in
                <div className={styles.button}>
                  <Link to="/signin" className={styles.signIn}>
                    Sign in
                  </Link>
                </div>
              )}
            </div>
            <div className={styles.buttonmargin}>
              {isLoggedIn ? (
                // "Logout" button if user is logged in
                <button className={styles.button1} onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                // "Join" button if user is not logged in
                <button className={styles.button1}>
                  <Link to="/signup" className={styles.join}>
                    Join
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
