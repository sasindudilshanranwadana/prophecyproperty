import Header from "../components/Header";
import BackgroundShadow1 from "../components/BackgroundShadow1";
import Container1 from "../components/Container1";
import styles from "./SearchReasultBuy.module.css";

const SearchReasultBuy = () => {
  return (
    <div className={styles.searchReasultBuy}>
      <Header />
      <BackgroundShadow1 />
      <main className={styles.footerParent}>
        <section className={styles.footer}>
          <footer className={styles.background}>
            <div className={styles.container}>
              <div className={styles.container1}>
                <div className={styles.linkFacebook}>
                  <img
                    className={styles.svgIcon}
                    loading="lazy"
                    alt=""
                    src="/svg-4.svg"
                  />
                </div>
                <div className={styles.linkTwittermargin}>
                  <div className={styles.linkFacebook}>
                    <img
                      className={styles.svgIcon}
                      loading="lazy"
                      alt=""
                      src="/svg-5.svg"
                    />
                  </div>
                </div>
                <div className={styles.linkTwittermargin}>
                  <div className={styles.linkFacebook}>
                    <img
                      className={styles.svgIcon}
                      loading="lazy"
                      alt=""
                      src="/svg-6.svg"
                    />
                  </div>
                </div>
                <div className={styles.linkTwittermargin}>
                  <div className={styles.linkFacebook}>
                    <img
                      className={styles.svgIcon}
                      loading="lazy"
                      alt=""
                      src="/svg-7.svg"
                    />
                  </div>
                </div>
                <div className={styles.linkTwittermargin}>
                  <div className={styles.linkFacebook}>
                    <img
                      className={styles.svgIcon}
                      loading="lazy"
                      alt=""
                      src="/svg-8.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
        <Container1
          realEstatePropertyForSaleIn={`Real Estate & Property for sale in Australia`}
          logojpg="/logojpg@2x.png"
          imagejpg="/imagejpg1@2x.png"
          logogif="/logogif@2x.png"
          imagejpg1="/imagejpg-11@2x.png"
        />
      </main>
    </div>
  );
};

export default SearchReasultBuy;
