import PropTypes from "prop-types";
import styles from "./BrokerItems.module.css";

const BrokerItems = ({ className = "", image }) => {
  return (
    <div className={[styles.brokerItems, className].join(" ")}>
      <div className={styles.backgroundshadow}>
        <div className={styles.backgroundWrapper}>
          <button className={styles.background}>
            <img className={styles.imageIcon} alt="" src={image} />
          </button>
        </div>
        <div className={styles.backgroundshadowInner}>
          <div className={styles.johnchappelowjpgParent}>
            <img
              className={styles.johnchappelowjpgIcon}
              loading="lazy"
              alt=""
              src="/johnchappelowjpg@2x.png"
            />
            <div className={styles.strongJohnChappelowParent}>
              <div className={styles.strongJohn}>John Chappelow</div>
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
                    href="https://www.mortgagechoice.com.au/john.chappelow"
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

BrokerItems.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
};

export default BrokerItems;
