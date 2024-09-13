import Header from "./Header";
import PropTypes from "prop-types";
import styles from "./MainContent.module.css";

const MainContent = ({ className = "" }) => {
  return (
    <section className={[styles.mainContent, className].join(" ")}>
      <Header />
      <div className={styles.pageHeader}>
        <div className={styles.header}>
          <div className={styles.latestNews}>
            <h1 className={styles.latestPropertyNews}>Latest Property News</h1>
          </div>
          <div
            className={styles.readTheLatest}
          >{`Read the latest real estate & finance news, property market trends and housing information and insights.`}</div>
        </div>
        <div className={styles.section}>
          <div className={styles.container}>
            <div className={styles.heading2} />
            <div className={styles.container1}>
              <div className={styles.container2}>
                <div className={styles.article}>
                  <div className={styles.link}>
                    <img
                      className={styles.gettyimages1324121174920081dIcon}
                      loading="lazy"
                      alt=""
                      src="/gettyimages1324121174-920081d10e4jpg@2x.png"
                    />
                  </div>
                  <div className={styles.margin}>
                    <div className={styles.container3}>
                      <div className={styles.container4}>
                        <div className={styles.link1}>
                          <a
                            className={styles.australianHousingMarket}
                            href="https://www.realestate.com.au/news/property-market-trends/"
                            target="_blank"
                          >
                            Australian Housing Market
                          </a>
                        </div>
                        <div className={styles.linkmargin}>
                          <div className={styles.link2}>
                            <a
                              className={
                                styles.australiasUltimateSpringContainer
                              }
                              href="https://www.realestate.com.au/news/time-to-buy-australias-ultimate-spring-2024-property-guide/"
                              target="_blank"
                            >
                              <span>
                                <p className={styles.australiasUltimateSpring}>
                                  Australia’s ultimate spring 2024
                                </p>
                                <p className={styles.australiasUltimateSpring}>
                                  property guide
                                </p>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.articlemargin}>
                  <div className={styles.article1}>
                    <div className={styles.link3}>
                      <img
                        className={styles.gettyimages1324121174920081dIcon}
                        loading="lazy"
                        alt=""
                        src="/7cuddlepieplacefaulconbridgenswjpg@2x.png"
                      />
                    </div>
                    <div className={styles.margin}>
                      <div className={styles.container5}>
                        <div className={styles.container4}>
                          <div className={styles.link1}>
                            <a
                              className={styles.australianHousingMarket}
                              href="https://www.realestate.com.au/news/property-market-trends/"
                              target="_blank"
                            >
                              Australian Housing Market
                            </a>
                          </div>
                          <div className={styles.linkmargin1}>
                            <div className={styles.link5}>
                              <a
                                className={
                                  styles.australiasUltimateSpringContainer
                                }
                                href="https://www.realestate.com.au/news/cheapest-suburbs-to-buy-a-quarter-acre-block/"
                                target="_blank"
                              >
                                <span>
                                  <p
                                    className={styles.australiasUltimateSpring}
                                  >
                                    The cheapest city suburbs to buy a
                                  </p>
                                  <p
                                    className={styles.australiasUltimateSpring}
                                  >
                                    quarter-acre block
                                  </p>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.margin2}>
                <div className={styles.container7}>
                  <div className={styles.article2}>
                    <div className={styles.link6}>
                      <img
                        className={styles.anArtistImpressionOfTheLaIcon}
                        loading="lazy"
                        alt=""
                        src="/anartistimpressionofthelakesatfutureappin1-94102742fe5jpeg@2x.png"
                      />
                    </div>
                    <div className={styles.margin3}>
                      <div className={styles.container8}>
                        <div className={styles.container8}>
                          <div className={styles.container8}>
                            <a
                              className={styles.southWest}
                              href="https://www.realestate.com.au/news/nsw/sydney/south-west/"
                              target="_blank"
                            >
                              South West
                            </a>
                          </div>
                          <div className={styles.linkmargin2}>
                            <div className={styles.link8}>
                              <a
                                className={styles.newHomesWillContainer}
                                href="https://www.realestate.com.au/news/9000-new-homes-will-australias-largest-ever-stand-alone-housing-development-get-the-green-light/"
                                target="_blank"
                              >
                                <p className={styles.australiasUltimateSpring}>
                                  9000 new homes: Will
                                </p>
                                <p className={styles.australiasUltimateSpring}>
                                  'largest ever' DA get the
                                </p>
                                <p className={styles.australiasUltimateSpring}>
                                  green light?
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.articlemargin1}>
                    <div className={styles.article2}>
                      <div className={styles.link6}>
                        <img
                          className={styles.anArtistImpressionOfTheLaIcon}
                          loading="lazy"
                          alt=""
                          src="/capi-3c1f6b8134578fef0aa194fdd5480a6d-741f43aeab431043b58d700ebdc99855jpeg@2x.png"
                        />
                      </div>
                      <div className={styles.margin3}>
                        <div className={styles.container8}>
                          <div className={styles.container8}>
                            <div className={styles.container8}>
                              <a
                                className={styles.southWest}
                                href="https://www.realestate.com.au/insights/"
                                target="_blank"
                              >
                                Insights
                              </a>
                            </div>
                            <div className={styles.linkmargin3}>
                              <div className={styles.link8}>
                                <a
                                  className={styles.newHomesWillContainer}
                                  href="https://www.realestate.com.au/insights/what-could-a-270000-cap-on-international-students-mean-for-the-property-market/"
                                  target="_blank"
                                >
                                  <p
                                    className={styles.australiasUltimateSpring}
                                  >
                                    What foreign student
                                  </p>
                                  <p
                                    className={styles.australiasUltimateSpring}
                                  >
                                    cap could mean the
                                  </p>
                                  <p
                                    className={styles.australiasUltimateSpring}
                                  >
                                    property market
                                  </p>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.articlemargin1}>
                    <div className={styles.article2}>
                      <div className={styles.link12}>
                        <img
                          className={styles.anArtistImpressionOfTheLaIcon}
                          loading="lazy"
                          alt=""
                          src="/gettyimages1017418702jpg@2x.png"
                        />
                      </div>
                      <div className={styles.margin3}>
                        <div className={styles.container12}>
                          <div className={styles.container8}>
                            <div className={styles.container8}>
                              <a
                                className={
                                  styles.australianHousingMarketContainer
                                }
                                href="https://www.realestate.com.au/news/property-market-trends/"
                                target="_blank"
                              >
                                <span>
                                  <p
                                    className={styles.australiasUltimateSpring}
                                  >
                                    Australian Housing
                                  </p>
                                  <p
                                    className={styles.australiasUltimateSpring}
                                  >
                                    Market
                                  </p>
                                </span>
                              </a>
                            </div>
                            <div className={styles.linkmargin4}>
                              <div className={styles.link8}>
                                <a
                                  className={styles.newHomesWillContainer}
                                  href="https://www.realestate.com.au/news/australias-10-most-tightly-held-suburbs-where-people-buy-and-dont-leave-for-more-than-20-years/"
                                  target="_blank"
                                >
                                  <p
                                    className={styles.australiasUltimateSpring}
                                  >
                                    Australia’s 10 most
                                  </p>
                                  <p
                                    className={styles.australiasUltimateSpring}
                                  >
                                    tightly held suburbs
                                  </p>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
