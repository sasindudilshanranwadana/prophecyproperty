import MainContent from "../components/MainContent";
import Section1 from "../components/Section1";
import styles from "./News.module.css";

const News = () => {
  return (
    <div className={styles.news}>
      <MainContent />
      <Section1
        gettyImagesde="/gettyimages1324121174-920081d10e4jpg@2x.png"
        cuddlepiePlaceFaulconbridge="/7cuddlepieplacefaulconbridgenswjpg@2x.png"
        anArtistImpressionOfTheLakes="/anartistimpressionofthelakesatfutureappin1-94102742fe5jpeg@2x.png"
        capicfbfefaafdda="/capi-3c1f6b8134578fef0aa194fdd5480a6d-741f43aeab431043b58d700ebdc99855jpeg@2x.png"
        gettyImages1017418702jpg="/gettyimages1017418702jpg@2x.png"
      />
      <Section1
        gettyImagesde="/gettyimages1324121174-920081d10e4jpg@2x.png"
        cuddlepiePlaceFaulconbridge="/7cuddlepieplacefaulconbridgenswjpg@2x.png"
        anArtistImpressionOfTheLakes="/anartistimpressionofthelakesatfutureappin1-94102742fe5jpeg@2x.png"
        capicfbfefaafdda="/capi-3c1f6b8134578fef0aa194fdd5480a6d-741f43aeab431043b58d700ebdc99855jpeg@2x.png"
        gettyImages1017418702jpg="/gettyimages1017418702jpg@2x.png"
      />
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
                  <img className={styles.svgIcon} alt="" src="/svg-5.svg" />
                </div>
              </div>
              <div className={styles.linkTwittermargin}>
                <div className={styles.linkFacebook}>
                  <img className={styles.svgIcon} alt="" src="/svg-6.svg" />
                </div>
              </div>
              <div className={styles.linkTwittermargin}>
                <div className={styles.linkFacebook}>
                  <img className={styles.svgIcon} alt="" src="/svg-7.svg" />
                </div>
              </div>
              <div className={styles.linkTwittermargin}>
                <div className={styles.linkFacebook}>
                  <img className={styles.svgIcon} alt="" src="/svg-8.svg" />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default News;
