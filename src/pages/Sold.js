import Header from "../components/Header";
import HeroInnerContent from "../components/HeroInnerContent";
import Section from "../components/Section";
import styles from "./Sold.module.css";

const Sold = () => {
  return (
    <div className={styles.sold}>
      <Header />
      <main className={styles.heroContentWrapper}>
        <section className={styles.heroContent}>
          <HeroInnerContent />
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

export default Sold;
