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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      navigate("/signin");
    } catch (error) {
      console.error("Sign out failed", error);
    }
  };

  return (
    <header className={[styles.header, className].join(" ")}>
      <nav className={styles.container}>
        <div className={styles.linkmargin}>
          <div className={styles.link}>
            <Link to="/" className={styles.prophecyproperty}>
              ProphecyProperty
            </Link>
          </div>
        </div>
        <nav className={styles.background}>
          <nav className={styles.nav}>
            <div className={styles.link2}>
              <Link to="/visualisations" className={styles.buy}>Visualisations</Link>
            </div>
            <div className={styles.link2}>
              <Link to="/pricesimulation" className={styles.buy}>Price Simulation</Link> {/* New link for Price Simulation */}
            </div>
            <div className={styles.link2}>
              <Link to="/recommendation" className={styles.buy}>Recommendations</Link>
            </div>
            <div className={styles.link2}>
              <Link to="/pricecomparison" className={styles.buy}>Price Comparison</Link>
            </div>
          </nav>
        </nav>
        <div className={styles.container1}>
          <div className={styles.container2}>
            {isLoggedIn ? (
              <div className={styles.logoutContainer}>
                <Link to="/profile">
                  <img src="/usericon.png" alt="User Icon" className={styles.userIcon} />
                </Link>
                <button className={styles.button1} onClick={handleLogout}>
                  Logout
                </button>
              </div>
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
