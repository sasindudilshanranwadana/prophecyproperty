import { useCallback } from "react";
import Container from "./Container";
import FrameComponent from "./FrameComponent";
import BrokerSeparator from "./BrokerSeparator";
import PowerhouseArticle from "./PowerhouseArticle";
import Margin from "./Margin";
import BrokerDetails from "./BrokerDetails";
import BrokerCards from "./BrokerCards";
import BrokerItems from "./BrokerItems";
import BrokerItems1 from "./BrokerItems1";
import BrokersSet from "./BrokersSet";
import BackgroundShadow from "./BackgroundShadow";
import Itemmargin from "./Itemmargin";
import Itemmargin1 from "./Itemmargin1";
import PropTypes from "prop-types";
import styles from "./HeroInnerContent.module.css";

const HeroInnerContent = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open(
      "https://www.realestate.com.au/insights/where-to-find-the-cheapest-3-and-4-bedroom-houses-near-the-city/"
    );
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open(
      "https://www.realestate.com.au/news/5-tips-for-an-affordable-knockdown-rebuild-in-2024/"
    );
  }, []);

  return (
    <div className={[styles.heroInnerContent, className].join(" ")}>
      <div className={styles.container}>
        <img
          className={styles.pictureWebLrgBdc6abbb9722}
          alt=""
          src="/picture--web-lrgbdc6abbb97221105646aavif@2x.png"
        />
        <div className={styles.heroTitleContainer}>
          <div className={styles.propertiesToCall}>Properties to call home</div>
        </div>
        <div className={styles.background}>
          <div className={styles.searchContainer}>
            <div className={styles.horizontalborder}>
              <div className={styles.searchTabNames}>
                <div className={styles.buy}>Buy</div>
              </div>
              <div className={styles.searchTabNames1}>
                <div className={styles.buy}>Rent</div>
              </div>
              <div className={styles.searchTabNames2}>
                <div className={styles.buy}>Sold</div>
              </div>
              <div className={styles.horizontalDivider} />
              <div className={styles.address}>Address</div>
              <div className={styles.agents}>Agents</div>
            </div>
          </div>
          <Container />
        </div>
      </div>
      <FrameComponent
        trackPropertybbedfdcfd="/trackproperty95bbe33df44d4c2f3d60avif@2x.png"
        homeloanbbbbfcfbbbavif="/homeloan12b7231b0bbf9cfb8bb8avif1@2x.png"
        explorebcebfcbcddcavif="/explore1b62cebf6cbc7dd8748cavif@2x.png"
      />
      <div className={styles.lakeMacquarieArticle}>
        <div className={styles.section}>
          <div className={styles.latestPropertyNews}>Latest property news</div>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.link}>
                <div className={styles.article}>
                  <div className={styles.picture}>
                    <img
                      className={styles.bedroomApartmentjpgIcon}
                      loading="lazy"
                      alt=""
                      src="/4bedroomapartmentjpg@2x.png"
                    />
                  </div>
                  <div className={styles.heading3}>
                    <a
                      className={styles.theSpaciousWellConnectedContainer}
                      href="https://www.realestate.com.au/news/the-spacious-well-connected-homes-in-the-hills-district-drawing-buyers/"
                      target="_blank"
                    >
                      <span>
                        <p className={styles.theSpaciousWellConnected}>
                          The spacious, well-connected
                        </p>
                        <p className={styles.theSpaciousWellConnected}>
                          homes in the Hills District…
                        </p>
                      </span>
                    </a>
                  </div>
                  <div className={styles.container1}>
                    <div className={styles.margin}>
                      <a
                        className={styles.presentedBy}
                        href="https://www.realestate.com.au/news/the-spacious-well-connected-homes-in-the-hills-district-drawing-buyers/"
                        target="_blank"
                      >
                        Presented by
                      </a>
                    </div>
                    <img
                      className={styles.sekisuiHouseHorizontal11875Icon}
                      alt=""
                      src="/sekisui-house-horizontal-1187538png@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <BrokerSeparator
              hLVisionShotNoTreeFinaljpg="/hlvisionshot1-notree-finaljpg@2x.png"
              logo5924086b7813png="/logo5-924086b7813png@2x.png"
            />
            <PowerhouseArticle
              gettyImages1316920356jpg="/gettyimages1316920356jpg@2x.png"
              capiDdefadaf="/capi-d919d597047258e0fad7af450000560e-d91c45191fef66d21e7e2f4a8f12919e-9420402ab1ejpeg@2x.png"
            />
            <div className={styles.bedroomHouse}>
              <div className={styles.link1} onClick={onLinkContainerClick}>
                <div className={styles.picture1}>
                  <img
                    className={styles.bedroomApartmentjpgIcon}
                    alt=""
                    src="/gettyimages1424721583jpg@2x.png"
                  />
                </div>
                <div className={styles.bedroomContent}>
                  <div className={styles.heading31}>
                    <a
                      className={styles.whereToFindContainer}
                      href="https://www.realestate.com.au/insights/where-to-find-the-cheapest-3-and-4-bedroom-houses-near-the-city/"
                      target="_blank"
                    >
                      <span>
                        <p className={styles.theSpaciousWellConnected}>
                          Where to find the cheapest 3
                        </p>
                        <p className={styles.theSpaciousWellConnected}>
                          and 4-bedroom houses near t…
                        </p>
                      </span>
                    </a>
                  </div>
                  <a
                    className={styles.minsRead}
                    href="https://www.realestate.com.au/insights/where-to-find-the-cheapest-3-and-4-bedroom-houses-near-the-city/"
                    target="_blank"
                  >
                    4 mins read
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.link2} onClick={onLinkContainerClick1}>
              <div className={styles.picture2}>
                <div className={styles.imageFill}>
                  <div className={styles.image} />
                </div>
              </div>
              <div className={styles.cheapestImage}>
                <div className={styles.heading32}>
                  <a
                    className={styles.tipsForAnContainer}
                    href="https://www.realestate.com.au/news/5-tips-for-an-affordable-knockdown-rebuild-in-2024/"
                    target="_blank"
                  >
                    <span>
                      <p className={styles.theSpaciousWellConnected}>
                        5 tips for an affordable
                      </p>
                      <p className={styles.theSpaciousWellConnected}>
                        knockdown rebuild in 2024
                      </p>
                    </span>
                  </a>
                </div>
                <div className={styles.rebuildTips}>
                  <div className={styles.rebuildPresenter}>
                    <a
                      className={styles.presentedBy1}
                      href="https://www.realestate.com.au/news/5-tips-for-an-affordable-knockdown-rebuild-in-2024/"
                      target="_blank"
                    >
                      Presented by
                    </a>
                  </div>
                  <img
                    className={styles.simondsLogo350x100pxjpgIcon}
                    alt=""
                    src="/simonds-logo-350x100pxjpg@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonScrollRight}>
            <img
              className={styles.svgIcon}
              loading="lazy"
              alt=""
              src="/svg-2.svg"
            />
          </div>
        </div>
        <div className={styles.section1}>
          <div className={styles.latestPropertyNews}>
            Local mortgage brokers
          </div>
          <div className={styles.list1}>
            <div className={styles.brokerItems}>
              <div className={styles.backgroundshadow}>
                <Margin image="/image-71@2x.png" />
                <BrokerDetails />
              </div>
            </div>
            <BrokerCards image="/image-1.svg" />
            <BrokerItems image="/image-1.svg" />
            <BrokerItems1 image="/image-1.svg" />
            <BrokersSet image="/image-1.svg" />
            <BackgroundShadow image="/image-1.svg" />
            <Itemmargin />
            <Itemmargin1 image="/image-71@2x.png" />
          </div>
          <div className={styles.buttonScrollRight1}>
            <img className={styles.svgIcon} alt="" src="/svg-2.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

HeroInnerContent.propTypes = {
  className: PropTypes.string,
};

export default HeroInnerContent;