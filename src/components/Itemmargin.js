import PropTypes from "prop-types";
import styles from "./Itemmargin.module.css";

const Itemmargin = ({ className = "" }) => {
  return (
    <div className={[styles.itemmargin, className].join(" ")}>
      <div className={styles.item}>
        <div className={styles.backgroundshadow}>
          <div className={styles.container}>
            <div className={styles.margin}>
              <div className={styles.container1}>
                <div className={styles.container2}>
                  <div className={styles.imgmargin}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image-6@2x.png"
                    />
                  </div>
                  <div className={styles.margin1}>
                    <div className={styles.container3}>
                      <div className={styles.notSureWhoContainer}>
                        <span>
                          <p className={styles.notSureWho}>
                            Not sure who is best
                          </p>
                          <p className={styles.notSureWho}>for you?</p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.container4}>
                    <div className={styles.ourExpertsCanContainer}>
                      <span>
                        <p className={styles.notSureWho}>
                          Our experts can help you
                        </p>
                        <p className={styles.notSureWho}>
                          connect with the right
                        </p>
                        <p className={styles.notSureWho}>broker.</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.margin2}>
              <div className={styles.container5}>
                <div className={styles.button}>
                  <div className={styles.requestACall}>Request a call back</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Itemmargin.propTypes = {
  className: PropTypes.string,
};

export default Itemmargin;
