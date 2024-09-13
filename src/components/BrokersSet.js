import PropTypes from "prop-types";
import styles from "./BrokersSet.module.css";

const BrokersSet = ({ className = "", image }) => {
  return (
    <div className={[styles.brokerCard, className].join(" ")}>
      <div className={styles.backgroundshadow}>
        <div className={styles.backgroundWrapper}>
          <div className={styles.background}>
            <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src={image}
            />
          </div>
        </div>
        <div className={styles.backgroundshadowInner}>
          <div className={styles.adambroughtonjpgParent}>
            <img
              className={styles.adambroughtonjpgIcon}
              alt=""
              src="/adambroughtonjpg@2x.png"
            />
            <div className={styles.strongAdamBroughtonParent}>
              <div className={styles.strongAdam}>Adam Broughton</div>
              <div className={styles.mortgageBroker}>Mortgage broker</div>
            </div>
          </div>
        </div>
        <div className={styles.padstowCallback}>
          <div className={styles.basedInRandwick}>Based in Randwick</div>
        </div>
        <div className={styles.marginWrapper}>
          <div className={styles.margin}>
            <div className={styles.container}>
              <div className={styles.link}>
                <a
                  className={styles.seeMoreDetails}
                  href="https://www.mortgagechoice.com.au/adam.broughton"
                  target="_blank"
                >
                  See more details
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.padstowCallback1}>
          <button className={styles.button}>
            <div className={styles.requestACall}>Request a call back</div>
          </button>
        </div>
      </div>
    </div>
  );
};

BrokersSet.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
};

export default BrokersSet;
