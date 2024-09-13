import PropTypes from "prop-types";
import styles from "./BackgroundHorizontalBorder.module.css";

const BackgroundHorizontalBorder = ({ className = "" }) => {
  return (
    <div className={[styles.backgroundhorizontalborder, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.container1}>
            <img className={styles.pictureIcon} alt="" src="/picture@2x.png" />
          </div>
          <div className={styles.backgroundshadow}>
            <div className={styles.container2}>
              <div className={styles.button}>
                <img className={styles.svgIcon} alt="" src="/svg-42.svg" />
                <div className={styles.margin}>
                  <div className={styles.container3}>
                    <div className={styles.offMarketMessage}>13</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.propertyInfo}>
          <div className={styles.infoContainer}>
            <div className={styles.infoDetails}>
              <div className={styles.offMarket}>
                <div className={styles.container4}>
                  <div className={styles.offMarket}>
                    <div className={styles.background1} />
                  </div>
                  <div className={styles.offMarket1}>Off market</div>
                </div>
              </div>
              <div className={styles.buttonMoreInformation}>
                <img className={styles.svgIcon} alt="" src="/svg-52.svg" />
              </div>
            </div>
            <div className={styles.container5}>
              <div className={styles.heading1}>
                <div className={styles.lawrenceRoad}>121 Lawrence Road</div>
              </div>
              <div className={styles.container6}>
                <div className={styles.mountWaverleyVic}>
                  Mount Waverley, VIC 3149
                </div>
              </div>
              <div className={styles.container7}>
                <div className={styles.container8}>
                  <div className={styles.svgmargin}>
                    <div className={styles.container2}>
                      <img
                        className={styles.svgIcon}
                        alt=""
                        src="/svg-62.svg"
                      />
                      <div className={styles.margin}>
                        <div className={styles.empty}>4</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.svgmargin}>
                    <div className={styles.container2}>
                      <img
                        className={styles.svgIcon}
                        alt=""
                        src="/svg-71.svg"
                      />
                      <div className={styles.margin}>
                        <div className={styles.empty}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.svgmargin}>
                    <div className={styles.container2}>
                      <img
                        className={styles.svgIcon}
                        alt=""
                        src="/svg-81.svg"
                      />
                      <div className={styles.margin}>
                        <div className={styles.empty}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.container12}>
                    <div className={styles.margin7}>
                      <div className={styles.empty}>|</div>
                    </div>
                    <div className={styles.container13}>
                      <div className={styles.empty}>House</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container14}>
            <div className={styles.backgroundborder}>
              <div className={styles.container15}>
                <div className={styles.svgmargin}>
                  <div className={styles.svg}>
                    <img className={styles.frameIcon} alt="" src="/frame.svg" />
                  </div>
                </div>
                <div className={styles.container16}>
                  <div className={styles.ownThisProperty}>
                    Own this property?
                  </div>
                </div>
              </div>
              <div className={styles.container17}>
                <div className={styles.getAccessTo}>
                  Get access to view owner data and insights.
                </div>
              </div>
              <button className={styles.button1}>
                <div className={styles.trackProperty}>Track property</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BackgroundHorizontalBorder.propTypes = {
  className: PropTypes.string,
};

export default BackgroundHorizontalBorder;
