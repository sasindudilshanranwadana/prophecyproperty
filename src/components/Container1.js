import { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./Container1.module.css";

const Container1 = ({
  className = "",
  separatorWidth,
  realEstatePropertyForSaleIn,
  sVGIconTextDecoration,
  logogifIconTextDecoration,
  sVG,
  logojpg,
  imagejpg,
  logogif,
  imagejpg1,
}) => {
  const linksBorderStyle = useMemo(() => {
    return {
      width: separatorWidth,
    };
  }, [separatorWidth]);

  const of190759PropertiesStyle = useMemo(() => {
    return {
      textDecoration: sVGIconTextDecoration,
    };
  }, [sVGIconTextDecoration]);

  const sortStyle = useMemo(() => {
    return {
      textDecoration: logogifIconTextDecoration,
    };
  }, [logogifIconTextDecoration]);

  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.container1}>
        <div className={styles.footerLinksBorder}>
          <div className={styles.horizontalborder}>
            <div className={styles.linksBorder} style={linksBorderStyle}>
              <div className={styles.realEstatePropertyForSalParent}>
                <div className={styles.realEstate}>
                  {realEstatePropertyForSaleIn}
                </div>
                <a
                  className={styles.of190759Properties}
                  style={of190759PropertiesStyle}
                >
                  1-25 of 190759 properties
                </a>
              </div>
            </div>
            <div className={styles.margin}>
              <div className={styles.container2}>
                <div className={styles.container2}>
                  <div className={styles.button}>
                    <div className={styles.svgSaveSearchmargin}>
                      <div className={styles.svgSaveSearch}>
                        <img
                          className={styles.frameIcon}
                          alt=""
                          src="/frame1.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.margin1}>
                      <div className={styles.container4}>
                        <div className={styles.saveSearch}>Save search</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.horizontalborder1}>
            <div className={styles.linkmargin} />
            <div className={styles.linkmargin1} />
            <div className={styles.linkmargin2} />
            <div className={styles.sortContainerWrapper}>
              <div className={styles.sortContainer}>
                <div className={styles.sortItems}>
                  <img
                    className={styles.frameIcon}
                    loading="lazy"
                    alt=""
                    src="/frame-11.svg"
                  />
                </div>
                <div className={styles.list}>List</div>
              </div>
            </div>
            <div className={styles.background} />
            <div className={styles.dropdownContainerParent}>
              <div className={styles.dropdownContainer}>
                <div className={styles.list} style={sortStyle}>
                  Sort
                </div>
              </div>
              <DropdownButton
                className={styles.comboboxListbox}
                as={ButtonGroup}
                style={{
                  width: "209",
                  height: "40",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                }}
              >{` `}</DropdownButton>
            </div>
          </div>
        </div>
        <div className={styles.article63WentworthParade}>
          <div className={styles.articleOneContent}>
            <div className={styles.background1}>
              <div className={styles.picture}>
                <img
                  className={styles.logojpgIcon}
                  loading="lazy"
                  alt=""
                  src={logojpg}
                />
              </div>
              <div className={styles.textAgentSylvieClarke}>
                <div className={styles.container5}>
                  <div className={styles.sylvieClarke}>Sylvie Clarke</div>
                </div>
              </div>
              <img
                className={styles.backgroundborderIcon}
                loading="lazy"
                alt=""
                src="/backgroundborder@2x.png"
              />
            </div>
            <div className={styles.container6}>
              <div className={styles.background2}>
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt=""
                  src="/icon1.svg"
                />
                <img className={styles.imagejpgIcon} alt="" src={imagejpg} />
                <div className={styles.buttonPreviousImage}>
                  <img
                    className={styles.icon1}
                    loading="lazy"
                    alt=""
                    src="/icon-11.svg"
                  />
                </div>
                <div className={styles.buttonNextImage}>
                  <img
                    className={styles.icon1}
                    loading="lazy"
                    alt=""
                    src="/icon-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.articleOneDetails}>
            <div className={styles.container7}>
              <div className={styles.container8}>
                <div className={styles.container9}>
                  <div className={styles.priceGuide660000}>
                    Price Guide: $660,000 - $670,000
                  </div>
                </div>
                <div className={styles.margin2}>
                  <div className={styles.buttonSaveProperty}>
                    <img
                      className={styles.svgSaveProperty}
                      loading="lazy"
                      alt=""
                      src="/svg--save-property.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.heading2Link}>
                <a
                  className={styles.wentworthParadeHindmarsh}
                  href="https://www.realestate.com.au/property-house-sa-hindmarsh+island-144910756"
                  target="_blank"
                >
                  63 Wentworth Parade, Hindmarsh Island
                </a>
              </div>
            </div>
            <div className={styles.container10}>
              <div className={styles.container11}>
                <div className={styles.container12}>
                  <div className={styles.container13}>
                    <div className={styles.margin3}>
                      <div className={styles.container14}>
                        <div className={styles.bedroomsmargin}>
                          <div className={styles.bedrooms}>
                            <img
                              className={styles.svgIcon}
                              loading="lazy"
                              alt=""
                              src="/svg-62.svg"
                            />
                            <div className={styles.margin4}>
                              <div className={styles.separator}>3</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.bedroomsmargin}>
                          <div className={styles.bedrooms}>
                            <img
                              className={styles.svgIcon}
                              loading="lazy"
                              alt=""
                              src="/svg-71.svg"
                            />
                            <div className={styles.margin4}>
                              <div className={styles.separator}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.bedrooms}>
                          <img
                            className={styles.svgIcon}
                            loading="lazy"
                            alt=""
                            src="/svg-81.svg"
                          />
                          <div className={styles.margin4}>
                            <div className={styles.separator}>2</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.text536MLandSize}>
                      <div className={styles.container15}>
                        <img
                          className={styles.svgIcon}
                          loading="lazy"
                          alt=""
                          src="/svg-121.svg"
                        />
                        <div className={styles.separator}>536</div>
                      </div>
                      <div className={styles.container16}>
                        <div className={styles.separator}>m²</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.container17}>
                  <div className={styles.container18}>
                    <div className={styles.separator}>|</div>
                  </div>
                  <div className={styles.textHousePropertyType}>
                    <div className={styles.house}>House</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.articleTwo}>
          <div className={styles.article53ParnellaDriveS}>
            <div className={styles.articleOneContent}>
              <div className={styles.background3}>
                <div className={styles.picture}>
                  <img
                    className={styles.logojpgIcon}
                    loading="lazy"
                    alt=""
                    src={logogif}
                  />
                </div>
                <div className={styles.textAgentHeidiHowe}>
                  <div className={styles.container5}>
                    <div className={styles.sylvieClarke}>Heidi Howe</div>
                  </div>
                </div>
                <img
                  className={styles.backgroundborderIcon1}
                  loading="lazy"
                  alt=""
                  src="/backgroundborder-1@2x.png"
                />
              </div>
              <div className={styles.container20}>
                <div className={styles.container21}>
                  <div className={styles.background4}>
                    <img
                      className={styles.imagejpgIcon1}
                      alt=""
                      src={imagejpg1}
                    />
                    <div className={styles.imageNavigationTwo}>
                      <div className={styles.buttonPreviousImage1}>
                        <img
                          className={styles.icon1}
                          loading="lazy"
                          alt=""
                          src="/icon-11.svg"
                        />
                      </div>
                      <img
                        className={styles.icon4}
                        loading="lazy"
                        alt=""
                        src="/icon1.svg"
                      />
                      <div className={styles.buttonPreviousImage1}>
                        <img
                          className={styles.icon1}
                          loading="lazy"
                          alt=""
                          src="/icon-2.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.overlayContainerTwo}>
                      <div className={styles.sortContainer}>
                        <div className={styles.overlay}>
                          <img
                            className={styles.svgIcon4}
                            loading="lazy"
                            alt=""
                            src="/svg-131.svg"
                          />
                        </div>
                        <div className={styles.overlay}>
                          <img
                            className={styles.svgIcon4}
                            loading="lazy"
                            alt=""
                            src="/svg-141.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.propertyDetailsTwo}>
              <div className={styles.container7}>
                <div className={styles.container8}>
                  <div className={styles.container9}>
                    <div className={styles.emptyPriceTwo}>$669,000</div>
                  </div>
                  <div className={styles.margin2}>
                    <div className={styles.buttonSaveProperty}>
                      <img
                        className={styles.svgSaveProperty}
                        loading="lazy"
                        alt=""
                        src="/svg--save-property.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.heading2Link1}>
                  <a
                    className={styles.wentworthParadeHindmarsh}
                    href="https://www.realestate.com.au/property-house-tas-stieglitz-145040036"
                    target="_blank"
                  >
                    53 Parnella Drive, Stieglitz
                  </a>
                </div>
              </div>
              <div className={styles.container10}>
                <div className={styles.container11}>
                  <div className={styles.container12}>
                    <div className={styles.container13}>
                      <div className={styles.margin3}>
                        <div className={styles.container14}>
                          <div className={styles.bedroomsmargin}>
                            <div className={styles.bedrooms}>
                              <img
                                className={styles.svgIcon}
                                loading="lazy"
                                alt=""
                                src="/svg-62.svg"
                              />
                              <div className={styles.margin4}>
                                <div className={styles.separator}>3</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.bedroomsmargin}>
                            <div className={styles.bedrooms}>
                              <img
                                className={styles.svgIcon}
                                loading="lazy"
                                alt=""
                                src="/svg-71.svg"
                              />
                              <div className={styles.margin4}>
                                <div className={styles.separator}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.bedrooms}>
                            <img
                              className={styles.svgIcon}
                              loading="lazy"
                              alt=""
                              src="/svg-81.svg"
                            />
                            <div className={styles.margin4}>
                              <div className={styles.separator}>2</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.text823MLandSize}>
                        <div className={styles.container15}>
                          <img
                            className={styles.svgIcon}
                            loading="lazy"
                            alt=""
                            src="/svg-121.svg"
                          />
                          <div className={styles.separator}>823</div>
                        </div>
                        <div className={styles.container31}>
                          <div className={styles.separator}>m²</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.container17}>
                    <div className={styles.container18}>
                      <div className={styles.separator}>|</div>
                    </div>
                    <div className={styles.textHousePropertyType}>
                      <div className={styles.house}>House</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pagination}>
          <div className={styles.pageNavigation}>
            <div className={styles.linkCurrentPagemargin}>
              <div className={styles.linkCurrentPage}>
                <a
                  className={styles.currentPageNumbers}
                  href="https://www.figma.com/design/eCV5Qck8qKshm9fR0tyaKW?node-id=4-1583"
                  target="_blank"
                >
                  1
                </a>
              </div>
            </div>
            <div className={styles.linkGoToPage2margin}>
              <div className={styles.linkGoToPage2}>
                <a
                  className={styles.currentPageNumbers}
                  href="https://www.realestate.com.au/buy/list-2"
                  target="_blank"
                >
                  2
                </a>
              </div>
            </div>
            <div className={styles.linkGoToPage2margin}>
              <div className={styles.linkGoToPage3}>
                <a
                  className={styles.currentPageNumbers}
                  href="https://www.realestate.com.au/buy/list-3"
                  target="_blank"
                >
                  3
                </a>
              </div>
            </div>
            <div className={styles.linkGoToPage2margin}>
              <div className={styles.linkGoToPage3}>
                <a
                  className={styles.currentPageNumbers}
                  href="https://www.realestate.com.au/buy/list-4"
                  target="_blank"
                >
                  4
                </a>
              </div>
            </div>
            <div className={styles.div2}>•••</div>
            <div className={styles.nextPageLink}>
              <div className={styles.linkGoToPage80margin}>
                <div className={styles.linkGoToPage80}>
                  <a
                    className={styles.currentPageNumbers}
                    href="https://www.realestate.com.au/buy/list-80"
                    target="_blank"
                  >
                    80
                  </a>
                </div>
              </div>
            </div>
            <button className={styles.container34}>
              <div className={styles.link}>
                <div className={styles.margin12}>
                  <div className={styles.container35}>
                    <a
                      className={styles.next}
                      href="https://www.realestate.com.au/buy/list-2"
                      target="_blank"
                    >
                      Next
                    </a>
                  </div>
                </div>
                <img className={styles.svgIcon} alt="" src="/svg-191.svg" />
              </div>
            </button>
          </div>
          <div className={styles.viewing125Of}>
            Viewing 1-25 of 190759 properties
          </div>
        </div>
      </div>
    </div>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
  realEstatePropertyForSaleIn: PropTypes.string,
  sVG: PropTypes.string,
  logojpg: PropTypes.string,
  imagejpg: PropTypes.string,
  logogif: PropTypes.string,
  imagejpg1: PropTypes.string,

  /** Style props */
  separatorWidth: PropTypes.any,
  sVGIconTextDecoration: PropTypes.any,
  logogifIconTextDecoration: PropTypes.any,
};

export default Container1;
