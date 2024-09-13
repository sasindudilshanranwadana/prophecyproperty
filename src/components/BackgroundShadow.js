import PropTypes from "prop-types";
import styles from "./BackgroundShadow.module.css";

const BackgroundShadow = ({ className = "", image }) => {
  return (
    <div className={[styles.backgroundshadow, className].join(" ")}>
      <div className={styles.padstowImage}>
        <div className={styles.background}>
          <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
        </div>
      </div>
      <div className={styles.padstowProfile}>
        <div className={styles.padstowContent}>
          <img
            className={styles.bassamaboulhafjpgIcon}
            alt=""
            src="/bassamaboulhafjpg@2x.png"
          />
          <div className={styles.padstowName}>
            <div className={styles.strongBassam}>Bassam Aboulhaf</div>
            <div className={styles.mortgageBroker}>Mortgage broker</div>
          </div>
        </div>
      </div>
      <div className={styles.padstowDetails}>
        <div className={styles.basedInPadstow}>Based in Padstow Heights</div>
      </div>
      <div className={styles.padstowDetailsLink}>
        <div className={styles.margin}>
          <div className={styles.container}>
            <div className={styles.link}>
              <a
                className={styles.seeMoreDetails}
                href="https://www.mortgagechoice.com.au/bassam.aboulhaf"
                target="_blank"
              >
                See more details
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.padstowDetails1}>
        <div className={styles.button}>
          <div className={styles.requestACall}>Request a call back</div>
        </div>
      </div>
    </div>
  );
};

BackgroundShadow.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
};

export default BackgroundShadow;
