import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.container1}>
            <div className={styles.linkFacebook}>
              <img
                className={styles.svgIcon}
                loading="lazy"
                alt=""
                src="/svg-4.svg"
              />
            </div>
            <div className={styles.linkTwittermargin}>
              <div className={styles.linkFacebook}>
                <img
                  className={styles.svgIcon}
                  loading="lazy"
                  alt=""
                  src="/svg-5.svg"
                />
              </div>
            </div>
            <div className={styles.linkTwittermargin}>
              <div className={styles.linkFacebook}>
                <img
                  className={styles.svgIcon}
                  loading="lazy"
                  alt=""
                  src="/svg-6.svg"
                />
              </div>
            </div>
            <div className={styles.linkTwittermargin}>
              <div className={styles.linkFacebook}>
                <img
                  className={styles.svgIcon}
                  loading="lazy"
                  alt=""
                  src="/svg-7.svg"
                />
              </div>
            </div>
            <div className={styles.linkTwittermargin}>
              <div className={styles.linkFacebook}>
                <img
                  className={styles.svgIcon}
                  loading="lazy"
                  alt=""
                  src="/svg-8.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
