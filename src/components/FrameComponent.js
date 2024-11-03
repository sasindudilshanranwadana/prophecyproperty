import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({
  className = "",
  trackPropertybbedfdcfd,
  homeloanbbbbfcfbbbavif,
  explorebcebfcbcddcavif,
}) => {
  return (
    <div className={[styles.sectionWrapper, className].join(" ")}>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.heading2}>
            <div className={styles.exploreAllThings}>
              Explore Real Estate in Victoria
            </div>
          </div>
        </div>
        <div className={styles.container1}></div>
        <div className={styles.tabpanel}>
          {/* Property Estimation Section */}
          <div className={styles.margin}>
            <div className={styles.backgroundborder}>
              <div className={styles.article}>
                <div className={styles.container2}>
                  <div className={styles.heading3margin}>
                    <div className={styles.container2}>
                      <div className={styles.getEstimatedPropertyContainer}>
                        <span>
                          <p className={styles.getEstimatedProperty}>
                            Get Estimated Property Values
                          </p>
                          <p className={styles.getEstimatedProperty}>
                            for homes in Victoria.
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.margin1}>
                    <div className={styles.container3}>
                      <div className={styles.seeHowMuchContainer}>
                        <p className={styles.getEstimatedProperty}>
                        See the current value of your property.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.link}>
                   
                  </div>
                </div>
                <div className={styles.link1}>
                  <div className={styles.picture}>
                    <img
                      className={styles.trackProperty95bbe33df44d4c2Icon}
                      loading="lazy"
                      alt="Property Valuation Tool"
                      src={trackPropertybbedfdcfd}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mortgage Assistance Section */}
          <div className={styles.margin}>
            <div className={styles.backgroundborder}>
              <div className={styles.article}>
                <div className={styles.container4}>
                  <div className={styles.heading3margin}>
                    <div className={styles.container2}>
                      <div className={styles.needHelpWith}>
                        Find the Right Mortgage
                      </div>
                    </div>
                  </div>
                  <div className={styles.margin3}>
                    <div className={styles.container3}>
                      <div className={styles.compareYourFinanceContainer}>
                        <span>
                          <p className={styles.getEstimatedProperty}>
                            Explore mortgage options tailored 
                          </p>
                          <p className={styles.getEstimatedProperty}>
                            to the Victorian market. 
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.link1}>
                  <div className={styles.picture}>
                    <img
                      className={styles.trackProperty95bbe33df44d4c2Icon}
                      loading="lazy"
                      alt="Mortgage Help"
                      src={homeloanbbbbfcfbbbavif}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Suburb Profiles Section */}
          <div className={styles.backgroundborder2}>
            <div className={styles.article}>
              <div className={styles.container4}>
                <div className={styles.heading3margin}>
                  <div className={styles.container2}>
                    <div className={styles.exploreSuburbProfiles}>
                      Explore Suburb Profiles
                    </div>
                  </div>
                </div>
                <div className={styles.margin1}>
                  <div className={styles.container3}>
                    <div className={styles.checkOutDifferentContainer}>
                      <p className={styles.getEstimatedProperty}>
                        Discover the unique characteristics of suburbs across Victoria.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.link1}>
                <div className={styles.picture}>
                  <img
                    className={styles.trackProperty95bbe33df44d4c2Icon}
                    loading="lazy"
                    alt="Suburb Profiles"
                    src={explorebcebfcbcddcavif}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  trackPropertybbedfdcfd: PropTypes.string,
  homeloanbbbbfcfbbbavif: PropTypes.string,
  explorebcebfcbcddcavif: PropTypes.string,
};

export default FrameComponent;
