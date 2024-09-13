import PropTypes from "prop-types";
import styles from "./BrokerDetails.module.css";

const BrokerDetails = ({ className = "" }) => {
  return (
    <div className={[styles.brokerDetails, className].join(" ")}>
      <div className={styles.brokerInfo}>
        <div className={styles.brokerNames}>
          <div className={styles.labelPostcode}>Postcode</div>
          <div className={styles.background}>
            <div className={styles.container}>
              <div className={styles.input}>
                <div className={styles.container1}>
                  <input
                    className={styles.placeholder}
                    placeholder="2000"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className={styles.border} />
          </div>
        </div>
        <button className={styles.button}>
          <div className={styles.findABroker}>Find a broker</div>
        </button>
      </div>
    </div>
  );
};

BrokerDetails.propTypes = {
  className: PropTypes.string,
};

export default BrokerDetails;
