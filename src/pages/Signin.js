import FormBackground from "../components/FormBackground";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from "./Signin.module.css";

const Signin = () => {
  return (
    <div className={styles.signin}>
      <footer className={styles.backgroundshadow}>
        <div className={styles.header}>
          <div className={styles.link}>
            {/* Change the title to be a Link to the home page */}
            <Link to="/" className={styles.prophecyproperty}>
              ProphecyProperty
            </Link>
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
