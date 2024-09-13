import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Background.module.css";

const Background = ({
  className = "",
  ratingFromASeller,
  propWidth,
  thisIsTheSecondTimeWeHaveUse,
  moneyThisTimeWeSoldAgainIn,
  propLeft,
  sVG6,
  propLeft1,
}) => {
  const reviewContentAndActionsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const readMoreStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const sVGIconStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className={[styles.background, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.margin}>
            <div className={styles.container2}>
              <div className={styles.container3}>
                <img className={styles.svgIcon} alt="" src="/svg-61.svg" />
              </div>
              <div className={styles.container3}>
                <img className={styles.svgIcon} alt="" src="/svg-61.svg" />
              </div>
              <div className={styles.container3}>
                <img className={styles.svgIcon} alt="" src="/svg-61.svg" />
              </div>
              <div className={styles.container3}>
                <img className={styles.svgIcon} alt="" src="/svg-61.svg" />
              </div>
              <div className={styles.container3}>
                <img className={styles.svgIcon} alt="" src="/svg-61.svg" />
              </div>
            </div>
          </div>
          <div className={styles.margin1}>
            <div className={styles.container8}>
              <div className={styles.ratingFromA}>{ratingFromASeller}</div>
            </div>
          </div>
        </div>
        <div className={styles.container9}>
          <img className={styles.svgIcon5} alt="" src="/svg-111.svg" />
          <div className={styles.verifiedReview}> Verified review</div>
        </div>
      </div>
      <div
        className={styles.reviewContentAndActions}
        style={reviewContentAndActionsStyle}
      >
        <div className={styles.thisIsTheContainer}>
          <span className={styles.thisIsTheContainer1}>
            <p className={styles.thisIsThe}>{thisIsTheSecondTimeWeHaveUse}</p>
            <p className={styles.thisIsThe}>{moneyThisTimeWeSoldAgainIn}</p>
          </span>
        </div>
        <div
          className={styles.readMore}
          style={readMoreStyle}
        >{`Read more `}</div>
        <img
          className={styles.svgIcon6}
          alt=""
          src={sVG6}
          style={sVGIconStyle}
        />
      </div>
    </div>
  );
};

Background.propTypes = {
  className: PropTypes.string,
  ratingFromASeller: PropTypes.string,
  thisIsTheSecondTimeWeHaveUse: PropTypes.string,
  moneyThisTimeWeSoldAgainIn: PropTypes.string,
  sVG6: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propLeft: PropTypes.any,
  propLeft1: PropTypes.any,
};

export default Background;
