import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ className = "" }) => {
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
              <a className={styles.buy}>Rent</a>
            </div>
            <div className={styles.link3}>
              <a className={styles.buy}>Sold</a>
            </div>
            <div className={styles.link4}>
              <a className={styles.buy}>Find agents</a>
            </div>
            <div className={styles.link5}>
              <a className={styles.buy}>News</a>
            </div>
          </nav>
        </nav>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <div className={styles.container3}>
              <div className={styles.button}>
                <a className={styles.signIn}>Sign in</a>
              </div>
            </div>
            <div className={styles.buttonmargin}>
              <button className={styles.button1}>
                <a className={styles.join}>Join</a>
              </button>
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
