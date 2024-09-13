import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./FormBackground.module.css";

const FormBackground = ({ className = "", isSignUp = false }) => {
  return (
    <form className={[styles.formBackground, className].join(" ")}>
      {/* Conditionally render First Name and Last Name fields if it's SignUp */}
      {isSignUp && (
        <>
          <div className={styles.background}>
            <div className={styles.input} />
            <img className={styles.imageIcon} alt="" src="/image.svg" />
            <div className={styles.emailField}>
              <div className={styles.label} />
              <input
                className={styles.background1}
                placeholder="First Name"
                type="text"
              />
            </div>
          </div>
          <div className={styles.background}>
            <div className={styles.input} />
            <img className={styles.imageIcon} alt="" src="/image.svg" />
            <div className={styles.emailField}>
              <div className={styles.label} />
              <input
                className={styles.background1}
                placeholder="Last Name"
                type="text"
              />
            </div>
          </div>
        </>
      )}

      {/* Email Address Field */}
      <div className={styles.background}>
        <div className={styles.input} />
        <img className={styles.imageIcon} alt="" src="/image.svg" />
        <div className={styles.emailField}>
          <div className={styles.label} />
          <input
            className={styles.background1}
            placeholder="Email address"
            type="email"
          />
        </div>
      </div>

      {/* Password Field */}
      <div className={styles.background2}>
        <div className={styles.input1}>
          <img className={styles.imageIcon1} alt="" src="/image-11@2x.png" />
        </div>
        <input
          className={styles.background3}
          placeholder="Password"
          type="password"
        />
        <div className={styles.label1} />
      </div>

      {/* Continue or Create Account Button */}
      <button className={styles.button}>
        <div className={styles.continue}>
          {isSignUp ? "Create Account" : "Continue"}
        </div>
      </button>

      <div className={styles.accountOptions}>
        <div className={styles.innerOptionsWrapper}>
          <div className={styles.innerOptions}>
            <div className={styles.accountQuestion}>
              {isSignUp ? (
                <div className={styles.dontHaveAn}>Already have an account? </div>
              ) : (
                <div className={styles.dontHaveAn}>Don't have an account? </div>
              )}
            </div>
            <div className={styles.link}>
              {/* Link Create account to SignUp.js page */}
              <Link to={isSignUp ? "/signin" : "/signup"} className={styles.createAccount}>
                {isSignUp ? "Sign in" : "Create account"}
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.divider}>
          <div className={styles.horizontalborder} />
          <div className={styles.or}>Or</div>
          <div className={styles.horizontalborder} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.formmargin}>
          <button className={styles.formButton}>
            <div className={styles.container1}>
              <div className={styles.continueWithGoogle}>
                Continue with Google
              </div>
            </div>
            <img className={styles.imageIcon2} alt="" src="/image-2@2x.png" />
          </button>
        </div>
        <div className={styles.formmargin1} />
      </div>
    </form>
  );
};

FormBackground.propTypes = {
  className: PropTypes.string,
  isSignUp: PropTypes.bool, // Prop to differentiate between sign-up and sign-in
};

export default FormBackground;
