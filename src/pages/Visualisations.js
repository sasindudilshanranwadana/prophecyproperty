import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Visualisations.module.css";

const Visualisations = () => {
  return (
    <div className={styles.visualisations}>
      <Header />
      <main className={styles.contentWrapper}>
        <section className={styles.innerWrapper}>
          <div className={styles.title}>
            <h1>Data Visualisations</h1>
          </div>
          {/* Add your visualisation components or content here */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Visualisations;
