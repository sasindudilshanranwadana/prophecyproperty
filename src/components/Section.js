import { useMemo } from "react";
import PopularLinks from "./PopularLinks";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ className = "", sectionHeight }) => {
  const sectionStyle = useMemo(() => {
    return {
      height: sectionHeight,
    };
  }, [sectionHeight]);

  return (
    <footer
      className={[styles.section, className].join(" ")}
      style={sectionStyle}
    >
      <PopularLinks />
      <div className={styles.ausProperty}>
        <div className={styles.realEstateIn}>Real estate in Australia</div>
      </div>
      <div className={styles.stateLinks}>
        <a
          className={styles.realEstateNsw}
          href="https://www.realestate.com.au/buy/in-nsw/list-1"
          target="_blank"
        >
          Real estate NSW
        </a>
        <div className={styles.vICtoBRI}>
          <a
            className={styles.realEstateVic}
            href="https://www.realestate.com.au/buy/in-vic/list-1"
            target="_blank"
          >
            Real estate VIC
          </a>
        </div>
        <a
          className={styles.realEstateQld}
          href="https://www.realestate.com.au/buy/in-qld/list-1"
          target="_blank"
        >
          Real estate QLD
        </a>
      </div>
      <div className={styles.stateLinks1}>
        <a
          className={styles.realEstateNsw}
          href="https://www.realestate.com.au/buy/in-wa/list-1"
          target="_blank"
        >
          Real estate WA
        </a>
        <div className={styles.realEstateSaWrapper}>
          <a
            className={styles.realEstateVic}
            href="https://www.realestate.com.au/buy/in-sa/list-1"
            target="_blank"
          >
            Real estate SA
          </a>
        </div>
        <a
          className={styles.realEstateTas}
          href="https://www.realestate.com.au/buy/in-tas/list-1"
          target="_blank"
        >
          Real estate TAS
        </a>
      </div>
      <div className={styles.stateLinks2}>
        <a
          className={styles.realEstateTas}
          href="https://www.realestate.com.au/buy/in-act/list-1"
          target="_blank"
        >
          Real estate ACT
        </a>
        <div className={styles.realEstateNtWrapper}>
          <a
            className={styles.realEstateVic}
            href="https://www.realestate.com.au/buy/in-nt/list-1"
            target="_blank"
          >
            Real estate NT
          </a>
        </div>
        <a
          className={styles.realEstateNsw}
          href="https://www.realestate.com.au/buy/in-sydney,+nsw+2000/list-1"
          target="_blank"
        >
          Real estate Sydney
        </a>
      </div>
      <div className={styles.stateLinks3}>
        <a
          className={styles.realEstateMelbourne}
          href="https://www.realestate.com.au/buy/in-melbourne,+vic+3000/list-1"
          target="_blank"
        >
          Real estate Melbourne
        </a>
        <div className={styles.realEstateBrisbaneWrapper}>
          <a
            className={styles.realEstateVic}
            href="https://www.realestate.com.au/buy/in-brisbane+city,+qld+4000/list-1"
            target="_blank"
          >
            Real estate Brisbane
          </a>
        </div>
        <a
          className={styles.realEstateTas}
          href="https://www.realestate.com.au/buy/in-perth,+wa+6000/list-1"
          target="_blank"
        >
          Real estate Perth
        </a>
      </div>
      <div className={styles.otherCities}>
        <div className={styles.adeDarHob}>
          <a
            className={styles.realEstateAdelaide}
            href="https://www.realestate.com.au/buy/in-adelaide,+sa+5000/list-1"
            target="_blank"
          >
            Real estate Adelaide
          </a>
          <a
            className={styles.realEstateDarwin}
            href="https://www.realestate.com.au/buy/in-darwin+-+greater+region,+nt/list-1"
            target="_blank"
          >
            Real estate Darwin
          </a>
        </div>
        <div className={styles.none}>
          <a
            className={styles.realEstateVic}
            href="https://www.realestate.com.au/buy/in-hobart,+tas+7000/list-1"
            target="_blank"
          >
            Real estate Hobart
          </a>
        </div>
        <a
          className={styles.realEstateNsw}
          href="https://www.realestate.com.au/buy/in-canberra+-+greater+region,+act/list-1"
          target="_blank"
        >
          Real estate Canberra
        </a>
      </div>
    </footer>
  );
};

Section.propTypes = {
  className: PropTypes.string,

  /** Style props */
  sectionHeight: PropTypes.any,
};

export default Section;
