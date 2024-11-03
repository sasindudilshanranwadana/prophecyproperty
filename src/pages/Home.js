import Header from "../components/Header";
import Container from "../components/Container";
import FrameComponent from "../components/FrameComponent";
import BrokerSeparator from "../components/BrokerSeparator";
import Margin from "../components/Margin";
import BrokerDetails from "../components/BrokerDetails";
import BrokerCards from "../components/BrokerCards";
import BrokerItems from "../components/BrokerItems";
import BrokerItems1 from "../components/BrokerItems1";
import BrokersSet from "../components/BrokersSet";
import BackgroundShadow from "../components/BackgroundShadow";
import Itemmargin from "../components/Itemmargin";
import Itemmargin1 from "../components/Itemmargin1";
import Footer from "../components/Footer";
import News from "../components/news"; // Import News component
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

            {/* Remaining elements like broker details */}
            <div className={styles.section1}>
              <div className={styles.latestPropertyNews}>
                Local mortgage brokers
              </div>
              <div className={styles.list1}>
                <div className={styles.brokerCards}>
                  <div className={styles.backgroundshadow}>
                    <Margin image="/image@2x.png" />
                    <BrokerDetails />
                  </div>
                </div>
                <BrokerCards image="/image-1.svg" />
                <BrokerItems image="/image-1.svg" />
                <BrokerItems1 image="/image-1.svg" />
                <BrokersSet image="/image-1.svg" />
                <BackgroundShadow image="/image-1.svg" />
                <Itemmargin />
                <Itemmargin1 image="/image-7@2x.png" />
              </div>
              <div className={styles.buttonScrollRight1}>
                <img className={styles.svgIcon} alt="" src="/svg-2.svg" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
