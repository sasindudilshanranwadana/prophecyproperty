import OverlayShadow from "../components/OverlayShadow";
import Header2 from "../components/Header2";
import Container2 from "../components/Container2";
import styles from "./SearchReasultAgents.module.css";

const SearchReasultAgents = () => {
  return (
    <div className={styles.searchReasultAgents}>
      <header className={styles.border}>
        <div className={styles.container}>
          <div className={styles.orderedList}>
            <div className={styles.itemmargin}>
              <div className={styles.item}>
                <div className={styles.link}>
                  <a className={styles.findAgent}>Find Agent</a>
                </div>
              </div>
            </div>
            <div className={styles.itemmargin1}>
              <div className={styles.item1}>
                <img
                  className={styles.svgIcon}
                  loading="lazy"
                  alt=""
                  src="/svg.svg"
                />
              </div>
            </div>
            <div className={styles.itemmargin2}>
              <div className={styles.item}>
                <div className={styles.mountWaverley}>Mount Waverley</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.containerWrapper}>
        <div className={styles.container1}>
          <div className={styles.realEstateAgents}>
            Real estate agents in Mount Waverley, VIC
          </div>
        </div>
      </div>
      <OverlayShadow />
      <div className={styles.background}>
        <div className={styles.container2}>
          <div className={styles.container3}>
            <div className={styles.showing}>Showing </div>
            <div className={styles.strong}>
              <div className={styles.results}>297 results</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.background1}>
        <div className={styles.container4}>
          <div className={styles.background2}>
            <div className={styles.heading5margin}>
              <div className={styles.heading5}>
                <div
                  className={styles.suburbSales}
                >{`Suburb Sales & Performance`}</div>
              </div>
            </div>
            <div className={styles.container5}>
              <img className={styles.svgIcon1} alt="" src="/svg-41.svg" />
            </div>
          </div>
        </div>
      </div>
      <Header2 />
      <main className={styles.frameParent}>
        <div className={styles.groupGrammarlyIntegrationWrapper}>
          <div className={styles.groupGrammarlyIntegration}>
            <div
              className={styles.modefullisactivet}
            >{`{\"mode\":\"full\",\"isActive\":true,\"isUserDisabled\":false}`}</div>
          </div>
        </div>
        <section className={styles.containerParent}>
          <Container2 />
          <footer className={styles.background3}>
            <div className={styles.container6}>
              <div className={styles.container7}>
                <div className={styles.linkFacebook}>
                  <img className={styles.svgIcon2} alt="" src="/svg-4.svg" />
                </div>
                <div className={styles.linkTwittermargin}>
                  <div className={styles.linkFacebook}>
                    <img className={styles.svgIcon2} alt="" src="/svg-5.svg" />
                  </div>
                </div>
                <div className={styles.linkTwittermargin}>
                  <div className={styles.linkFacebook}>
                    <img className={styles.svgIcon2} alt="" src="/svg-6.svg" />
                  </div>
                </div>
                <div className={styles.linkTwittermargin}>
                  <div className={styles.linkFacebook}>
                    <img className={styles.svgIcon2} alt="" src="/svg-7.svg" />
                  </div>
                </div>
                <div className={styles.linkTwittermargin}>
                  <div className={styles.linkFacebook}>
                    <img className={styles.svgIcon2} alt="" src="/svg-8.svg" />
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default SearchReasultAgents;
