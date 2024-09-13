import PropTypes from "prop-types";
import styles from "./BrokerItems1.module.css";

const BrokerItems1 = ({ className = "", image }) => {
  return (
    <div className={[styles.brokerItems, className].join(" ")}>
      <div className={styles.backgroundshadow}>
        <div className={styles.backgroundWrapper}>
          <button className={styles.background}>
            <img className={styles.imageIcon} alt="" src={image} />
          </button>
        </div>
        <div className={styles.backgroundshadowInner}>
          <div className={styles.samgjpgParent}>
            <img
              className={styles.samgjpgIcon}
              loading="lazy"
              alt=""
              src="/samgjpg@2x.png"
            />
            <div className={styles.strongSamGhoreyshiParent}>
              <div className={styles.strongSam}>Sam Ghoreyshi</div>
              <div className={styles.mortgageBroker}>Mortgage broker</div>
            </div>
          </div>
        </div>
        <div className={styles.backgroundshadowChild}>
          <div className={styles.basedInSydneyParent}>
            <div className={styles.basedInSydney}>Based in Sydney</div>
            <div className={styles.margin}>
              <div className={styles.container}>
                <div className={styles.link}>
                  <a
                    className={styles.seeMoreDetails}
                    href="https://www.mortgagechoice.com.au/samg"
                    target="_blank"
                  >
                    See more details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>
            <div className={styles.requestACall}>Request a call back</div>
          </button>
        </div>
      </div>
    </div>
  );
};

BrokerItems1.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
};

export default BrokerItems1;
