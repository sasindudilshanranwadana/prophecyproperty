import PropTypes from "prop-types";
import styles from "./BrokerSeparator.module.css";

const BrokerSeparator = ({
  className = "",
  hLVisionShotNoTreeFinaljpg,
  logo5924086b7813png,
}) => {
  return (
    <div className={[styles.newsItemSeparator, className].join(" ")}>
      <div className={styles.itemmargin}>
        <div className={styles.item}>
          <div className={styles.item}>
            <div className={styles.article}>
              <div className={styles.picture}>
                <img
                  className={styles.hlVisionShot1NoTreeFinalIcon}
                  loading="lazy"
                  alt=""
                  src={hLVisionShotNoTreeFinaljpg}
                />
              </div>
              <div className={styles.heading3}>
                <a
                  className={styles.wellnessPerksOfContainer}
                  href="https://www.realestate.com.au/news/6-wellness-perks-of-this-new-lake-macquarie-over-55s-community-clubhouse/"
                  target="_blank"
                >
                  <span>
                    <p className={styles.wellnessPerksOf}>
                      6 wellness perks of this new
                    </p>
                    <p className={styles.wellnessPerksOf}>
                      Lake Macquarie over-55's…
                    </p>
                  </span>
                </a>
              </div>
              <div className={styles.container}>
                <div className={styles.margin}>
                  <a
                    className={styles.presentedBy}
                    href="https://www.realestate.com.au/news/6-wellness-perks-of-this-new-lake-macquarie-over-55s-community-clubhouse/"
                    target="_blank"
                  >
                    Presented by
                  </a>
                </div>
                <img
                  className={styles.logo5924086b7813pngIcon}
                  alt=""
                  src={logo5924086b7813png}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BrokerSeparator.propTypes = {
  className: PropTypes.string,
  hLVisionShotNoTreeFinaljpg: PropTypes.string,
  logo5924086b7813png: PropTypes.string,
};

export default BrokerSeparator;
