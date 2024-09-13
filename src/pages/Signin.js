import FormBackground from "../components/FormBackground";
import styles from "./Signin.module.css";

const Signin = () => {
  return (
    <div className={styles.signin}>
      <footer className={styles.backgroundshadow}>
        <div className={styles.header}>
          <div className={styles.link}>
            <b className={styles.prophecyproperty}>ProphecyProperty</b>
          </div>
          <div className={styles.container}>
            <div className={styles.heading1}>
              <div className={styles.signIn}>Sign in</div>
            </div>
          </div>
        </div>
        <div className={styles.formBackgroundWrapper}>
          <FormBackground />
        </div>
      </footer>
    </div>
  );
};

export default Signin;
