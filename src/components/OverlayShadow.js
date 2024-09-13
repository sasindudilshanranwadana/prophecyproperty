import PropTypes from "prop-types";
import styles from "./OverlayShadow.module.css";

const OverlayShadow = ({ className = "" }) => {
  return (
    <form className={[styles.overlayshadow, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container1} />
        <div className={styles.comboboxListbox}>
          <div className={styles.container2}>
            <div className={styles.backgroundborder}>
              <img className={styles.svgIcon} alt="" src="/svg-11.svg" />
            </div>
            <div className={styles.input}>
              <div className={styles.container3}>
                <div className={styles.mountWaverleyVic}>
                  Mount Waverley, VIC 3149
                </div>
              </div>
            </div>
            <div className={styles.backgroundborder1}>
              <div className={styles.container4}>
                <div className={styles.container5}>
                  <img
                    className={styles.icon}
                    loading="lazy"
                    alt=""
                    src="/icon.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.comboboxListboxWrapper}>
          <div className={styles.comboboxListbox1}>
            <div className={styles.container6}>
              <div className={styles.label}>
                <div className={styles.sortBy}>Sort by</div>
              </div>
              <div className={styles.label}>
                <div className={styles.buttonMenu}>
                  <div className={styles.container8}>
                    <div
                      className={styles.suburbSales}
                    >{`Suburb Sales & Performance`}</div>
                  </div>
                  <div className={styles.margin}>
                    <div className={styles.container9}>
                      <img
                        className={styles.svgIcon}
                        alt=""
                        src="/svg-21.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container10}>
        <div className={styles.margin1}>
          <div className={styles.container11}>
            <div className={styles.propertySalesType}>Property sales type</div>
            <div className={styles.container12}>
              <div className={styles.label1}>
                <div className={styles.input1}>
                  <div className={styles.inputchecked} />
                </div>
                <div className={styles.all}>All</div>
              </div>
              <button className={styles.label2}>
                <div className={styles.input2} />
                <div className={styles.house}>House</div>
              </button>
              <button className={styles.label3}>
                <div className={styles.input2} />
                <div className={styles.unitApartment}>{`Unit & Apartment`}</div>
              </button>
              <div className={styles.label4}>
                <div className={styles.inputParent}>
                  <div className={styles.input4} />
                  <div className={styles.propertySaleType}>...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.comboboxListbox2}>
          <div className={styles.container6}>
            <div className={styles.label}>
              <div className={styles.timeframe}>Timeframe</div>
            </div>
            <div className={styles.label}>
              <div className={styles.buttonMenu1}>
                <div className={styles.container8}>
                  <div className={styles.months}>12 months</div>
                </div>
                <div className={styles.margin}>
                  <div className={styles.container9}>
                    <img className={styles.svgIcon} alt="" src="/svg-21.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

OverlayShadow.propTypes = {
  className: PropTypes.string,
};

export default OverlayShadow;
