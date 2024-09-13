import PropTypes from "prop-types";
import styles from "./PopularLinks.module.css";

const PopularLinks = ({ className = "" }) => {
  return (
    <div className={[styles.footerLinksBorder, className].join(" ")}>
      <div className={styles.horizontalborder}>
        <div className={styles.footerLinks}>
          <div className={styles.realEstate}>Real estate</div>
        </div>
        <div className={styles.horizontalDivider} />
        <div className={styles.footerLinks1}>
          <div className={styles.realEstate}>New homes</div>
        </div>
        <div className={styles.realEstate}>Popular areas</div>
        <div className={styles.realEstate}>Popular searches</div>
      </div>
    </div>
  );
};

PopularLinks.propTypes = {
  className: PropTypes.string,
};

export default PopularLinks;
