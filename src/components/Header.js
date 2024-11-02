// Header.js
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";
import styles from "./Header.module.css";

const Header = ({ className = "" }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // Set isLoggedIn based on user state
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
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
              <Link to="/" className={styles.buy}>Buy</Link>
            </div>
            <div className={styles.link2}>
              <Link to="/visualisations" className={styles.buy}>Visualisations</Link>
            </div>
            <div className={styles.link2}>
              <Link to="/ai-models" className={styles.buy}>AI Models</Link>
            </div>
          </nav>
        </nav>
        <div className={styles.container1}>
          <div className={styles.container2}>
            {isLoggedIn ? (
              <button className={[styles.button1, styles.join].join(" ")} onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <>
                <div className={styles.button}>
                  <Link to="/signin" className={styles.signIn}>Sign in</Link>
                </div>
                <div className={styles.buttonmargin}>
                  <button className={styles.button1}>
                    <Link to="/signup" className={styles.join}>Join</Link>
                  </button>
                </div>
              </>
            )}
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
