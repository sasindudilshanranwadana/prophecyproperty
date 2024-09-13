import InputBackground from "../components/InputBackground";
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.signup}>
      <footer className={styles.backgroundshadow}>
        <div className={styles.header}>
          <div className={styles.link}>
            <b className={styles.prophecyproperty}>ProphecyProperty</b>
          </div>
          <div className={styles.container}>
            <div className={styles.heading1}>
              <div className={styles.createAccount}>Create account</div>
            </div>
          </div>
        </div>
        <div className={styles.pageContent}>
          <InputBackground />
        </div>
      </footer>
    </div>
  );
};

export default SignUp;
