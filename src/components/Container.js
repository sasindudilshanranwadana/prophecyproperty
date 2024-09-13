import PropTypes from "prop-types";
import styles from "./Container.module.css";

const Container = ({ className = "" }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.buttonDialogSelectSuburb}>
        <img className={styles.svgIcon} alt="" src="/svg.svg" />
        <input
          className={styles.margin}
          placeholder="Search suburb, postcode or state"
          type="text"
        />
      </div>
      <div className={styles.container1}>
        <button className={styles.buttonDialogApplyFilters}>
          <img className={styles.svgIcon} alt="" src="/svg-1.svg" />
          <div className={styles.margin1}>
            <div className={styles.container2}>
              <div className={styles.filters}>Filters</div>
            </div>
          </div>
        </button>
        <button className={styles.buttonApplyFiltersAndSea}>
          <div className={styles.buttonApplyFiltersAndSea1}>
            <div className={styles.search}>Search</div>
          </div>
        </button>
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
