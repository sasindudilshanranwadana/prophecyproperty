import Header from "../components/Header";
import Container from "../components/Container";
import FrameComponent from "../components/FrameComponent";
import News from "../components/news"; // Import News component
import HousingDetails from "../components/HousingDetails"; // Import HousingDetails component
import Footer from "../components/Footer";
import styles from "./Home.module.css";
import { auth } from "../firebaseConfig";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <main className={styles.contentWrapper}>
        <section className={styles.innerWrapper}>
          <div className={styles.containerParent}>
            <div className={styles.container}>
              <img
                className={styles.pictureWebLrgBdc6abbb9722}
                alt=""
                src="/picture--web-lrgbdc6abbb97221105646aavif@2x.png"
              />
              <div className={styles.propertiesToCallHomeWrapper}>
                <div className={styles.propertiesToCall}>
                  Properties to call home
                </div>
              </div>
              <div className={styles.background}>
                <div className={styles.searchOptions}>
                  <div className={styles.horizontalborder}>
                    <div className={styles.buyWrapper}>
                      <div className={styles.buy}>Buy</div>
                    </div>
                  </div>
                </div>
                <Container />
              </div>
            </div>
            <FrameComponent
              trackPropertybbedfdcfd="/trackproperty95bbe33df44d4c2f3d60avif@2x.png"
              homeloanbbbbfcfbbbavif="/homeloan12b7231b0bbf9cfb8bb8avif@2x.png"
              explorebcebfcbcddcavif="/explore1b62cebf6cbc7dd8748cavif@2x.png"
            />

            {/* Replace static news with News component */}
            <div className={styles.sectionParent}>
              <div className={styles.section}>
                <div className={styles.latestPropertyNews}>
                  Latest Property News
                </div>
                <News /> {/* Dynamic news content */}
              </div>
            </div>

            {/* Housing details section */}
            <div className={styles.section1}>
              <div className={styles.latestPropertyNews}>
                Featured Housing Listings
              </div>
              <HousingDetails /> {/* Dynamic housing details */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
