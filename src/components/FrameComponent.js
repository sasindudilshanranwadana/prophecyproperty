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
              Explore all things property
            </div>
          </div>
        </div>
        <div className={styles.container1}>
          <button className={styles.buttonmargin}>
            <div className={styles.button}>
              <div className={styles.buying}>Buying</div>
            </div>
          </button>
          <div className={styles.buttonmargin1}>
            <div className={styles.button1}>
              <div className={styles.renting}>Renting</div>
            </div>
          </div>
          <button className={styles.buttonmargin}>
            <div className={styles.button1}>
              <div className={styles.selling}>Selling</div>
            </div>
          </button>
          <button className={styles.button3}>
            <div className={styles.buying}>Researching</div>
          </button>
        </div>
        <div className={styles.tabpanel}>
          <div className={styles.margin}>
            <div className={styles.backgroundborder}>
              <div className={styles.article}>
                <div className={styles.container2}>
                  <div className={styles.heading3margin}>
                    <div className={styles.container2}>
                      <div className={styles.getEstimatedPropertyContainer}>
                        <span>
                          <p className={styles.getEstimatedProperty}>
                            Get estimated property prices with a
                          </p>
                          <p className={styles.getEstimatedProperty}>
                            realEstimate™
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.margin1}>
                    <div className={styles.container3}>
                      <div className={styles.seeHowMuchContainer}>
                        <p className={styles.getEstimatedProperty}>
                          See how much your property's worth
                        </p>
                        <p className={styles.getEstimatedProperty}>
                          whether you own it or want to buy it.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.link}>
                    <a
                      className={styles.checkPropertyValues}
                      href="https://www.realestate.com.au/property/"
                      target="_blank"
                    >
                      Check property values
                    </a>
                  </div>
                </div>
                <div className={styles.link1}>
                  <div className={styles.picture}>
                    <img
                      className={styles.trackProperty95bbe33df44d4c2Icon}
                      loading="lazy"
                      alt=""
                      src={trackPropertybbedfdcfd}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.margin}>
            <div className={styles.backgroundborder}>
              <div className={styles.article}>
                <div className={styles.container4}>
                  <div className={styles.heading3margin}>
                    <div className={styles.container2}>
                      <div className={styles.needHelpWith}>
                        Need help with a mortgage?
                      </div>
                    </div>
                  </div>
                  <div className={styles.margin3}>
                    <div className={styles.container3}>
                      <div className={styles.compareYourFinanceContainer}>
                        <span>
                          <p className={styles.getEstimatedProperty}>
                            Compare your finance options to make an
                          </p>
                          <p className={styles.getEstimatedProperty}>
                            informed call.
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.link2}>
                    <a
                      className={styles.checkPropertyValues}
                      href="https://www.realestate.com.au/home-loans/"
                      target="_blank"
                    >
                      Explore home loans
                    </a>
                  </div>
                </div>
                <div className={styles.link1}>
                  <div className={styles.picture}>
                    <img
                      className={styles.trackProperty95bbe33df44d4c2Icon}
                      loading="lazy"
                      alt=""
                      src={homeloanbbbbfcfbbbavif}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.backgroundborder2}>
            <div className={styles.article}>
              <div className={styles.container4}>
                <div className={styles.heading3margin}>
                  <div className={styles.container2}>
                    <div className={styles.exploreSuburbProfiles}>
                      Explore suburb profiles
                    </div>
                  </div>
                </div>
                <div className={styles.margin1}>
                  <div className={styles.container3}>
                    <div className={styles.checkOutDifferentContainer}>
                      <p className={styles.getEstimatedProperty}>
                        Check out different suburb profiles and find
                      </p>
                      <p className={styles.getEstimatedProperty}>
                        one that’s right for you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.link}>
                  <a
                    className={styles.checkPropertyValues}
                    href="https://www.realestate.com.au/australia/"
                    target="_blank"
                  >
                    Research suburbs
                  </a>
                </div>
              </div>
              <div className={styles.link1}>
                <div className={styles.picture}>
                  <img
                    className={styles.trackProperty95bbe33df44d4c2Icon}
                    loading="lazy"
                    alt=""
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
