import { useCallback } from "react";
import Background from "./Background";
import Margin1 from "./Margin1";
import PropTypes from "prop-types";
import styles from "./Container2.module.css";

const Container2 = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open(
      "https://www.realestate.com.au/property-house-vic-mount+waverley-144956004"
    );
  }, []);

  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.backgroundshadowParent}>
        <div className={styles.backgroundshadow}>
          <div className={styles.background}>
            <img
              className={styles.maingifIcon}
              loading="lazy"
              alt=""
              src="/maingif@2x.png"
            />
          </div>
          <div className={styles.agentCard}>
            <div className={styles.container1}>
              <div className={styles.container2}>
                <div className={styles.link}>
                  <div className={styles.container3}>
                    <div className={styles.container4}>
                      <div className={styles.border}>
                        <div className={styles.background1}>
                          <img
                            className={styles.mainjpgIcon}
                            loading="lazy"
                            alt=""
                            src="/mainjpg@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.container5}>
                      <div className={styles.container6}>
                        <a
                          className={styles.calvinHuang}
                          href="https://www.realestate.com.au/agent/calvin-huang-2656946"
                          target="_blank"
                        >
                          Calvin Huang
                        </a>
                      </div>
                      <div className={styles.container7}>
                        <div className={styles.container8}>
                          <img
                            className={styles.svgIcon}
                            alt=""
                            src="/svg-51.svg"
                          />
                        </div>
                        <div className={styles.margin}>
                          <a
                            className={styles.emptyMargin}
                            href="https://www.realestate.com.au/agent/calvin-huang-2656946"
                            target="_blank"
                          >
                            5.0
                          </a>
                        </div>
                        <div className={styles.container9}>
                          <a
                            className={styles.reviews}
                            href="https://www.realestate.com.au/agent/calvin-huang-2656946"
                            target="_blank"
                          >
                            (93 reviews)
                          </a>
                        </div>
                      </div>
                      <div className={styles.container10}>
                        <a
                          className={styles.reviewsInLast}
                          href="https://www.realestate.com.au/agent/calvin-huang-2656946"
                          target="_blank"
                        >
                          20 reviews in last 12 months
                        </a>
                      </div>
                      <div className={styles.container11}>
                        <a
                          className={styles.directorLicensed}
                          href="https://www.realestate.com.au/agent/calvin-huang-2656946"
                          target="_blank"
                        >{`Director & Licensed Estate Ag…`}</a>
                      </div>
                      <div className={styles.container12}>
                        <a
                          className={styles.jellisCraig}
                          href="https://www.realestate.com.au/agent/calvin-huang-2656946"
                          target="_blank"
                        >
                          Jellis Craig - Monash
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.agentActions}>
                <div className={styles.agentButtons}>
                  <div className={styles.link1}>
                    <div className={styles.container13}>
                      <div className={styles.background2}>
                        <div className={styles.container14}>
                          <a
                            className={styles.mountWaverley}
                            href="https://www.realestate.com.au/agent/calvin-huang-2656946"
                            target="_blank"
                          >
                            Mount Waverley
                          </a>
                        </div>
                        <div className={styles.container15}>
                          <div className={styles.container16}>
                            <div className={styles.margin1}>
                              <div className={styles.container16}>
                                <div className={styles.emptySoldProperties}>
                                  11
                                </div>
                              </div>
                            </div>
                            <div className={styles.container18}>
                              <div className={styles.container19}>
                                <div className={styles.propertiesSold}>
                                  Properties sold
                                </div>
                                <div className={styles.small}>
                                  <div className={styles.asLeadAgent}>
                                    (as lead agent)
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.container20}>
                            <div className={styles.margin2}>
                              <div className={styles.container21}>
                                <div className={styles.container22}>
                                  <div className={styles.m}>$1.52m</div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.container23}>
                              <div className={styles.asLeadAgent}>
                                <p className={styles.medianSold}>Median sold</p>
                                <p className={styles.medianSold}>price</p>
                              </div>
                            </div>
                          </div>
                          <div className={styles.container24}>
                            <div className={styles.container25}>
                              <div className={styles.m}>29</div>
                            </div>
                            <div className={styles.container26}>
                              <div className={styles.asLeadAgent}>
                                <p className={styles.medianSold}>Median days</p>
                                <p className={styles.medianSold}>advertised</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.background3}>
                        <div className={styles.container27}>
                          <a
                            className={styles.allSuburbs}
                            href="https://www.realestate.com.au/agent/calvin-huang-2656946"
                            target="_blank"
                          >
                            ALL SUBURBS
                          </a>
                        </div>
                        <div className={styles.container28}>
                          <div className={styles.margin3}>
                            <div className={styles.container16}>
                              <a
                                className={styles.emptySalesCount}
                                href="https://www.realestate.com.au/agent/calvin-huang-2656946"
                                target="_blank"
                              >
                                118
                              </a>
                            </div>
                          </div>
                          <div className={styles.container30}>
                            <div className={styles.asLeadAgent}>
                              <p className={styles.medianSold}>Properties</p>
                              <p className={styles.medianSold}>sold</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.container31}>
                    <div className={styles.buttonmargin}>
                      <button className={styles.button}>
                        <div className={styles.requestAFree}>
                          Request a free market appraisal
                        </div>
                      </button>
                    </div>
                    <button className={styles.button1}>
                      <div className={styles.addToCompare}>Add to compare</div>
                    </button>
                  </div>
                </div>
                <div className={styles.backgroundParent}>
                  <Background
                    ratingFromASeller="Rating from a seller"
                    thisIsTheSecondTimeWeHaveUse="This is the second time we have used Calvin to sell a house, and both times he has been right on the"
                    moneyThisTimeWeSoldAgainIn="money. This time we sold, again, inside the contract period..."
                    sVG6="/svg-12.svg"
                  />
                  <div className={styles.container32}>
                    <div className={styles.container33}>
                      <div className={styles.margin4}>
                        <div className={styles.container34}>
                          <div className={styles.container35}>
                            <div className={styles.agentVideo}>AGENT VIDEO</div>
                          </div>
                          <div className={styles.background4}>
                            <img
                              className={styles.svgIcon1}
                              alt=""
                              src="/svg-13.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.container36}>
                        <div className={styles.container37}>
                          <div className={styles.agentVideo}>RECENTLY SOLD</div>
                        </div>
                        <div className={styles.container38}>
                          <div className={styles.container39}>
                            <div className={styles.link2}>
                              <div className={styles.background5}>
                                <div className={styles.background6}>
                                  <a
                                    className={styles.directorLicensed}
                                    href="https://www.realestate.com.au/property-house-vic-glen+waverley-145722848"
                                    target="_blank"
                                  >
                                    SOLD
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Margin1 sOLDHref="https://www.realestate.com.au/property-house-vic-glen+waverley-145723508" />
                          <Margin1
                            propWidth="134px"
                            propFlex="unset"
                            propBackgroundImage="url('/background3@3x.png')"
                            sOLDHref="https://www.realestate.com.au/property-house-vic-glen+waverley-145756288"
                          />
                          <Margin1
                            propWidth="134px"
                            propFlex="unset"
                            propBackgroundImage="url('/background4@3x.png')"
                            sOLDHref="https://www.realestate.com.au/property-house-vic-glen+waverley-145830896"
                          />
                          <Margin1
                            propWidth="134px"
                            propFlex="unset"
                            propBackgroundImage="url('/background5@3x.png')"
                            sOLDHref="https://www.realestate.com.au/property-house-vic-glen+waverley-145662864"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.backgroundshadow1}>
          <div className={styles.background7}>
            <img
              className={styles.maingifIcon}
              alt=""
              src="/mainjpg-1@2x.png"
            />
          </div>
          <div className={styles.agentCard}>
            <div className={styles.container1}>
              <div className={styles.container2}>
                <div className={styles.link}>
                  <div className={styles.container3}>
                    <div className={styles.container4}>
                      <div className={styles.border}>
                        <div className={styles.background1}>
                          <img
                            className={styles.mainjpgIcon}
                            alt=""
                            src="/mainjpg-2@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.container5}>
                      <div className={styles.container6}>
                        <a
                          className={styles.calvinHuang}
                          href="https://www.realestate.com.au/agent/claire-liang-2553838"
                          target="_blank"
                        >
                          Claire Liang
                        </a>
                      </div>
                      <div className={styles.container46}>
                        <div className={styles.container8}>
                          <img
                            className={styles.svgIcon}
                            alt=""
                            src="/svg-51.svg"
                          />
                        </div>
                        <div className={styles.margin}>
                          <a
                            className={styles.emptyMargin}
                            href="https://www.realestate.com.au/agent/claire-liang-2553838"
                            target="_blank"
                          >
                            5.0
                          </a>
                        </div>
                        <div className={styles.container48}>
                          <a
                            className={styles.reviews}
                            href="https://www.realestate.com.au/agent/claire-liang-2553838"
                            target="_blank"
                          >
                            (53 reviews)
                          </a>
                        </div>
                      </div>
                      <div className={styles.container14}>
                        <a
                          className={styles.reviewsInLast}
                          href="https://www.realestate.com.au/agent/claire-liang-2553838"
                          target="_blank"
                        >
                          25 reviews in last 12 months
                        </a>
                      </div>
                      <div className={styles.container50}>
                        <a
                          className={styles.jellisCraig}
                          href="https://www.realestate.com.au/agent/claire-liang-2553838"
                          target="_blank"
                        >
                          Area Manager
                        </a>
                      </div>
                      <div className={styles.container51}>
                        <a
                          className={styles.jellisCraig}
                          href="https://www.realestate.com.au/agent/claire-liang-2553838"
                          target="_blank"
                        >
                          Ray White - Mount Waverley
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.agentActions}>
                <div className={styles.agentButtons}>
                  <div className={styles.link1}>
                    <div className={styles.container13}>
                      <div className={styles.background2}>
                        <div className={styles.container14}>
                          <a
                            className={styles.mountWaverley}
                            href="https://www.realestate.com.au/agent/claire-liang-2553838"
                            target="_blank"
                          >
                            Mount Waverley
                          </a>
                        </div>
                        <div className={styles.container54}>
                          <div className={styles.container16}>
                            <div className={styles.margin1}>
                              <div className={styles.container16}>
                                <div className={styles.m}>8</div>
                              </div>
                            </div>
                            <div className={styles.container18}>
                              <div className={styles.container19}>
                                <div className={styles.propertiesSold}>
                                  Properties sold
                                </div>
                                <div className={styles.small}>
                                  <div className={styles.asLeadAgent}>
                                    (as lead agent)
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.container16}>
                            <div className={styles.margin2}>
                              <div className={styles.container21}>
                                <div className={styles.container22}>
                                  <div className={styles.m}>$1.51m</div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.container62}>
                              <div className={styles.asLeadAgent}>
                                <p className={styles.medianSold}>Median sold</p>
                                <p className={styles.medianSold}>price</p>
                              </div>
                            </div>
                          </div>
                          <div className={styles.container63}>
                            <div className={styles.container64}>
                              <div className={styles.div1}>31</div>
                            </div>
                            <div className={styles.container65}>
                              <div className={styles.asLeadAgent}>
                                <p className={styles.medianSold}>Median days</p>
                                <p className={styles.medianSold}>advertised</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.background3}>
                        <div className={styles.container27}>
                          <a
                            className={styles.allSuburbs}
                            href="https://www.realestate.com.au/agent/claire-liang-2553838"
                            target="_blank"
                          >
                            ALL SUBURBS
                          </a>
                        </div>
                        <div className={styles.container67}>
                          <div className={styles.margin8}>
                            <div className={styles.container16}>
                              <a
                                className={styles.a1}
                                href="https://www.realestate.com.au/agent/claire-liang-2553838"
                                target="_blank"
                              >
                                22
                              </a>
                            </div>
                          </div>
                          <div className={styles.container30}>
                            <div className={styles.asLeadAgent}>
                              <p className={styles.medianSold}>Properties</p>
                              <p className={styles.medianSold}>sold</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.container31}>
                    <div className={styles.buttonmargin}>
                      <button className={styles.button}>
                        <div className={styles.requestAFree}>
                          Request a free market appraisal
                        </div>
                      </button>
                    </div>
                    <button className={styles.button1}>
                      <div className={styles.addToCompare}>Add to compare</div>
                    </button>
                  </div>
                </div>
                <div className={styles.backgroundGroup}>
                  <Background
                    ratingFromASeller="Rating from a buyer"
                    propWidth="727.9px"
                    thisIsTheSecondTimeWeHaveUse={`"I recently purchased a property through Claire, and I couldn't be more pleased with the experience.`}
                    moneyThisTimeWeSoldAgainIn="From start to finish, Claire was professional, knowledgeabl..."
                    propLeft="434.7px"
                    sVG6="/svg-211.svg"
                    propLeft1="523.5px"
                  />
                  <div className={styles.container71}>
                    <div className={styles.container72}>
                      <div className={styles.container37}>
                        <div className={styles.agentVideo}>RECENTLY SOLD</div>
                      </div>
                      <div className={styles.verticalborder}>
                        <div className={styles.container74}>
                          <div className={styles.container39}>
                            <div className={styles.link2}>
                              <div className={styles.background11}>
                                <div className={styles.background6}>
                                  <a
                                    className={styles.directorLicensed}
                                    href="https://www.realestate.com.au/property-house-vic-mount+waverley-144733520"
                                    target="_blank"
                                  >
                                    SOLD
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Margin1
                            propWidth="unset"
                            propFlex="1"
                            propBackgroundImage="url('/background7@3x.png')"
                            sOLDHref="https://www.realestate.com.au/property-house-vic-mount+waverley-145556536"
                          />
                          <Margin1
                            propWidth="unset"
                            propFlex="1"
                            propBackgroundImage="url('/background8@3x.png')"
                            sOLDHref="https://www.realestate.com.au/property-house-vic-mount+waverley-144953464"
                          />
                          <Margin1
                            propWidth="unset"
                            propFlex="1"
                            propBackgroundImage="url('/background9@3x.png')"
                            sOLDHref="https://www.realestate.com.au/property-house-vic-glen+waverley-145522440"
                          />
                          <Margin1
                            propWidth="unset"
                            propFlex="1"
                            onLinkContainerClick={onLinkContainerClick}
                            propBackgroundImage="url('/background10@3x.png')"
                            sOLDHref="https://www.realestate.com.au/property-house-vic-mount+waverley-144956004"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.backgroundshadow1}>
          <div className={styles.background}>
            <img className={styles.maingifIcon} alt="" src="/maingif@2x.png" />
          </div>
          <div className={styles.agentCard}>
            <div className={styles.container1}>
              <div className={styles.container2}>
                <div className={styles.link}>
                  <div className={styles.container3}>
                    <div className={styles.container4}>
                      <div className={styles.border}>
                        <div className={styles.background1}>
                          <img
                            className={styles.mainjpgIcon}
                            alt=""
                            src="/mainjpg-3@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.container5}>
                      <div className={styles.container81}>
                        <a
                          className={styles.calvinHuang}
                          href="https://www.realestate.com.au/agent/di-goldsmith-3076035"
                          target="_blank"
                        >
                          Di Goldsmith
                        </a>
                      </div>
                      <div className={styles.container46}>
                        <div className={styles.container8}>
                          <img
                            className={styles.svgIcon}
                            alt=""
                            src="/svg-51.svg"
                          />
                        </div>
                        <div className={styles.margin}>
                          <a
                            className={styles.emptyMargin}
                            href="https://www.realestate.com.au/agent/di-goldsmith-3076035"
                            target="_blank"
                          >
                            5.0
                          </a>
                        </div>
                        <div className={styles.container9}>
                          <a
                            className={styles.reviews}
                            href="https://www.realestate.com.au/agent/di-goldsmith-3076035"
                            target="_blank"
                          >
                            (25 reviews)
                          </a>
                        </div>
                      </div>
                      <div className={styles.container14}>
                        <a
                          className={styles.reviewsInLast}
                          href="https://www.realestate.com.au/agent/di-goldsmith-3076035"
                          target="_blank"
                        >
                          13 reviews in last 12 months
                        </a>
                      </div>
                      <div className={styles.container11}>
                        <a
                          className={styles.directorLicensed}
                          href="https://www.realestate.com.au/agent/di-goldsmith-3076035"
                          target="_blank"
                        >{`Sales Consultant & Licensed E…`}</a>
                      </div>
                      <div className={styles.container87}>
                        <a
                          className={styles.jellisCraig}
                          href="https://www.realestate.com.au/agent/di-goldsmith-3076035"
                          target="_blank"
                        >
                          Jellis Craig - Monash
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.agentActions}>
                <div className={styles.agentButtons}>
                  <div className={styles.link1}>
                    <div className={styles.container13}>
                      <div className={styles.background2}>
                        <div className={styles.container14}>
                          <a
                            className={styles.mountWaverley}
                            href="https://www.realestate.com.au/agent/di-goldsmith-3076035"
                            target="_blank"
                          >
                            Mount Waverley
                          </a>
                        </div>
                        <div className={styles.container15}>
                          <div className={styles.container16}>
                            <div className={styles.margin1}>
                              <div className={styles.container16}>
                                <div className={styles.m}>8</div>
                              </div>
                            </div>
                            <div className={styles.container18}>
                              <div className={styles.container19}>
                                <div className={styles.propertiesSold}>
                                  Properties sold
                                </div>
                                <div className={styles.small}>
                                  <div className={styles.asLeadAgent}>
                                    (as lead agent)
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.container95}>
                            <div className={styles.margin2}>
                              <div className={styles.container21}>
                                <div className={styles.container22}>
                                  <div className={styles.m}>$1.49m</div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.container98}>
                              <div className={styles.asLeadAgent}>
                                <p className={styles.medianSold}>Median sold</p>
                                <p className={styles.medianSold}>price</p>
                              </div>
                            </div>
                          </div>
                          <div className={styles.container99}>
                            <div className={styles.container25}>
                              <div className={styles.div3}>23</div>
                            </div>
                            <div className={styles.container101}>
                              <div className={styles.asLeadAgent}>
                                <p className={styles.medianSold}>Median days</p>
                                <p className={styles.medianSold}>advertised</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.background3}>
                        <div className={styles.container27}>
                          <a
                            className={styles.allSuburbs}
                            href="https://www.realestate.com.au/agent/di-goldsmith-3076035"
                            target="_blank"
                          >
                            ALL SUBURBS
                          </a>
                        </div>
                        <div className={styles.container28}>
                          <div className={styles.margin12}>
                            <div className={styles.container16}>
                              <a
                                className={styles.emptySalesCount}
                                href="https://www.realestate.com.au/agent/di-goldsmith-3076035"
                                target="_blank"
                              >
                                16
                              </a>
                            </div>
                          </div>
                          <div className={styles.container30}>
                            <div className={styles.asLeadAgent}>
                              <p className={styles.medianSold}>Properties</p>
                              <p className={styles.medianSold}>sold</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.container31}>
                    <div className={styles.buttonmargin}>
                      <button className={styles.button}>
                        <div className={styles.requestAFree}>
                          Request a free market appraisal
                        </div>
                      </button>
                    </div>
                    <button className={styles.button1}>
                      <div className={styles.addToCompare}>Add to compare</div>
                    </button>
                  </div>
                </div>
                <div className={styles.backgroundContainer}>
                  <Background
                    ratingFromASeller="Rating from a seller"
                    propWidth="702.5px"
                    thisIsTheSecondTimeWeHaveUse="Di was a valuable asset when selling our property, having a good depth of knowledge and strong"
                    moneyThisTimeWeSoldAgainIn="understanding of the local property market. In addition, Di displ..."
                    propLeft="472.4px"
                    sVG6="/svg-12.svg"
                    propLeft1="561.2px"
                  />
                  <div className={styles.container107}>
                    <div className={styles.container33}>
                      <div className={styles.margin4}>
                        <div className={styles.container34}>
                          <div className={styles.container35}>
                            <div className={styles.agentVideo}>AGENT VIDEO</div>
                          </div>
                          <div className={styles.background17}>
                            <img
                              className={styles.svgIcon1}
                              alt=""
                              src="/svg-13.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.container36}>
                        <div className={styles.container37}>
                          <div className={styles.agentVideo}>RECENTLY SOLD</div>
                        </div>
                        <div className={styles.container38}>
                          <div className={styles.container39}>
                            <div className={styles.link2}>
                              <div className={styles.background18}>
                                <div className={styles.background6}>
                                  <a
                                    className={styles.directorLicensed}
                                    href="https://www.realestate.com.au/property-unit-vic-mount+waverley-145478516"
                                    target="_blank"
                                  >
                                    SOLD
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Margin1
                            propWidth="134px"
                            propFlex="unset"
                            propBackgroundImage="url('/background13@3x.png')"
                            sOLDHref="https://www.realestate.com.au/property-house-vic-mount+waverley-144991956"
                          />
                          <Margin1
                            propWidth="134px"
                            propFlex="unset"
                            propBackgroundImage="url('/background14@3x.png')"
                            sOLDHref="https://www.realestate.com.au/property-house-vic-glen+waverley-144678620"
                          />
                          <Margin1
                            propWidth="134px"
                            propFlex="unset"
                            propBackgroundImage="url('/background15@3x.png')"
                            sOLDHref="https://www.realestate.com.au/property-house-vic-glen+waverley-144394284"
                          />
                          <Margin1
                            propWidth="134px"
                            propFlex="unset"
                            propBackgroundImage="url('/background16@3x.png')"
                            sOLDHref="https://www.realestate.com.au/property-house-vic-mount+waverley-144133700"
                          />
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
      <div className={styles.link9} />
      <div className={styles.backgroundhorizontalborder}>
        <div className={styles.page1Of}>Page 1 of 13</div>
        <img className={styles.icon} alt="" src="/icon-1.svg" />
      </div>
    </div>
  );
};

Container2.propTypes = {
  className: PropTypes.string,
};

export default Container2;
