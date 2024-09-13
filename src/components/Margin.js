import PropTypes from "prop-types";
import styles from "./Margin.module.css";

const Margin = ({ className = "", image }) => {
  return (
    <div className={[styles.margin, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.imgmargin}>
            <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src={image}
            />
          </div>
          <div className={styles.container2}>
            <div className={styles.enterAPostcodeContainer}>
              <p className={styles.enterAPostcode}>Enter a postcode to find</p>
              <p className={styles.enterAPostcode}>
                mortgage brokers near you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Margin.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
};

export default Margin;
