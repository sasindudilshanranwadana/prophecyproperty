import FormBackground from "../components/FormBackground";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from "./SignUp.module.css"; // Use correct SignUp styles

const SignUp = () => {
  return (
    <div className={styles.signup}>
      <footer className={styles.backgroundshadow}>
        <div className={styles.header}>
          <div className={styles.link}>
            {/* Link to the home page */}
            <Link to="/" className={styles.prophecyproperty}>
              ProphecyProperty
            </Link>
          </div>
          <div className={styles.container}>
            <div className={styles.heading1}>
              <div className={styles.createAccount}>Sign Up</div>
            </div>
          </div>
        </div>
        <div className={styles.formBackgroundWrapper}>
          <FormBackground isSignUp={true} /> {/* Pass isSignUp={true} to render additional fields */}
        </div>
      </footer>
    </div>
  );
};

export default SignUp;
