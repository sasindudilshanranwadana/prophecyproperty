import PropTypes from "prop-types";
import styles from "./PowerhouseArticle.module.css";

const PowerhouseArticle = ({
  className = "",
  gettyImages1316920356jpg,
  capiDdefadaf,
}) => {
  return (
    <div className={[styles.powerhouseArticle, className].join(" ")}>
      <div className={styles.powerhouseContent}>
        <div className={styles.picture}>
          <img
            className={styles.gettyimages1316920356jpgIcon}
            loading="lazy"
            alt=""
            src={gettyImages1316920356jpg}
          />
        </div>
        <div className={styles.powerhouseHeadings}>
          <div className={styles.heading3}>
            <a
              className={styles.untappedValueTheContainer}
              href="https://www.realestate.com.au/news/untapped-value-the-surprise-powerhouses-in-australias-property-race/"
              target="_blank"
            >
              <span>
                <p className={styles.untappedValueThe}>
                  Untapped value: The surprise
                </p>
                <p className={styles.untappedValueThe}>
                  powerhouses in Australia’s…
                </p>
              </span>
            </a>
          </div>
          <a
            className={styles.minsRead}
            href="https://www.realestate.com.au/news/untapped-value-the-surprise-powerhouses-in-australias-property-race/"
            target="_blank"
          >
            3 mins read
          </a>
        </div>
      </div>
      <div className={styles.powerhouseContent1}>
        <div className={styles.picture}>
          <img
            className={styles.gettyimages1316920356jpgIcon}
            loading="lazy"
            alt=""
            src={capiDdefadaf}
          />
        </div>
        <div className={styles.powerhouseHeadings}>
          <div className={styles.heading31}>
            <a
              className={styles.barelyLiveableRentersContainer}
              href="https://www.realestate.com.au/news/barely-liveable-renters-forced-to-live-in-unhealthy-temperatures/"
              target="_blank"
            >
              <p className={styles.untappedValueThe}>
                ‘Barely liveable’: renters forced
              </p>
              <p className={styles.untappedValueThe}>to live in unhealthy…</p>
            </a>
          </div>
          <a
            className={styles.minsRead}
            href="https://www.realestate.com.au/news/barely-liveable-renters-forced-to-live-in-unhealthy-temperatures/"
            target="_blank"
          >
            4 mins read
          </a>
        </div>
      </div>
    </div>
  );
};

PowerhouseArticle.propTypes = {
  className: PropTypes.string,
  gettyImages1316920356jpg: PropTypes.string,
  capiDdefadaf: PropTypes.string,
};

export default PowerhouseArticle;
