import PropTypes from "prop-types";
import styles from "./BrokerCards.module.css";

const BrokerCards = ({ className = "", image }) => {
  return (
    <div className={[styles.brokerCards, className].join(" ")}>
      <div className={styles.backgroundshadow}>
        <div className={styles.backgroundWrapper}>
          <button className={styles.background}>
            <img className={styles.imageIcon} alt="" src={image} />
          </button>
        </div>
        <div className={styles.backgroundshadowInner}>
          <div className={styles.ryanpappasjpgParent}>
            <img
              className={styles.ryanpappasjpgIcon}
              loading="lazy"
              alt=""
              src="/ryanpappasjpg@2x.png"
            />
            <div className={styles.strongRyanPappasParent}>
              <div className={styles.strongRyan}>Ryan Pappas</div>
              <div className={styles.mortgageBroker}>Mortgage broker</div>
            </div>
          </div>
        </div>
        <div className={styles.brokerLocation}>
          <div className={styles.locations}>
            <div className={styles.basedInSydney}>Based in Sydney</div>
            <div className={styles.margin}>
              <div className={styles.container}>
                <div className={styles.link}>
                  <a
                    className={styles.seeMoreDetails}
                    href="https://www.mortgagechoice.com.au/ryan.pappas"
                    target="_blank"
                  >
                    See more details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.brokerCallback}>
          <button className={styles.button}>
            <div className={styles.requestACall}>Request a call back</div>
          </button>
        </div>
      </div>
    </div>
  );
};

BrokerCards.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
};

export default BrokerCards;
