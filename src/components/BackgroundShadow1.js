import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./BackgroundShadow1.module.css";

const BackgroundShadow1 = ({ className = "", propTextDecoration }) => {
  const filtersStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div className={[styles.backgroundshadow, className].join(" ")}>
      <div className={styles.background}>
        <div className={styles.buttonmargin}>
          <div className={styles.button}>
            <div className={styles.container}>
              <img className={styles.svgIcon} alt="" src="/svg2.svg" />
            </div>
            <input
              className={styles.margin}
              placeholder="Search region, suburb or postcode"
              type="text"
            />
          </div>
        </div>
        <div className={styles.buttonmargin1}>
          <div className={styles.button1}>
            <div className={styles.propertyType}>Property type</div>
          </div>
        </div>
        <div className={styles.buttonmargin2}>
          <button className={styles.button2}>
            <div className={styles.price}>Price</div>
          </button>
        </div>
        <div className={styles.buttonmargin3}>
          <div className={styles.button3}>
            <a className={styles.bed}>Bed</a>
          </div>
        </div>
        <div className={styles.buttonmargin1}>
          <button className={styles.button4}>
            <img className={styles.svgIcon} alt="" src="/svg-1.svg" />
            <div className={styles.margin1}>
              <div className={styles.container1}>
                <div className={styles.filters} style={filtersStyle}>
                  Filters
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className={styles.linkmargin}>
          <div className={styles.link}>
            <img
              className={styles.svgIcon}
              loading="lazy"
              alt=""
              src="/svg-25.svg"
            />
            <div className={styles.margin1}>
              <div className={styles.container1}>
                <a
                  className={styles.map}
                  href="https://www.realestate.com.au/buy/map-1"
                  target="_blank"
                >
                  Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BackgroundShadow1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
};

export default BackgroundShadow1;
