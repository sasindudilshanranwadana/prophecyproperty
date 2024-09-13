import PropTypes from "prop-types";
import styles from "./Itemmargin1.module.css";

const Itemmargin1 = ({ className = "", image }) => {
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
                      loading="lazy"
                      alt=""
                      src={image}
                    />
                  </div>
                  <div className={styles.container1}>
                    <div className={styles.whetherYouAreContainer}>
                      <span>
                        <p className={styles.whetherYouAre}>
                          Whether you are refinancing
                        </p>
                        <p className={styles.whetherYouAre}>
                          or investing, Mortgage
                        </p>
                        <p className={styles.whetherYouAre}>
                          Choice brokers are with you
                        </p>
                        <p className={styles.whetherYouAre}>
                          every step of the way.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.margin1}>
              <div className={styles.container1}>
                <div className={styles.link}>
                  <a
                    className={styles.strongView}
                    href="https://www.mortgagechoice.com.au/mortgage-brokers/"
                    target="_blank"
                  >
                    View more brokers
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Itemmargin1.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
};

export default Itemmargin1;
