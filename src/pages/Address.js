import Header from "../components/Header";
import HeroInnerContent1 from "../components/HeroInnerContent1";
import Section from "../components/Section";
import styles from "./Address.module.css";

const Address = () => {
  return (
    <div className={styles.address}>
      <Header />
      <main className={styles.heroContentWrapper}>
        <section className={styles.heroContent}>
          <HeroInnerContent1 />
          <Section sectionHeight="316.8px" />
        </section>
      </main>
      <div className={styles.footer}>
        <div className={styles.background}>
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
        </div>
      </div>
    </div>
  );
};

export default Address;
