import PropTypes from "prop-types";
import styles from "./FormBackground.module.css";

const FormBackground = ({ className = "" }) => {
  return (
    <form className={[styles.formBackground, className].join(" ")}>
      <div className={styles.background}>
        <div className={styles.input} />
        <img className={styles.imageIcon} alt="" src="/image.svg" />
        <div className={styles.emailField}>
          <div className={styles.label} />
          <input
            className={styles.background1}
            placeholder="Email address"
            type="text"
          />
        </div>
      </div>
      <div className={styles.background2}>
        <div className={styles.input1}>
          <img className={styles.imageIcon1} alt="" src="/image-11@2x.png" />
        </div>
        <input
          className={styles.background3}
          placeholder="Password"
          type="text"
        />
        <div className={styles.label1} />
      </div>
      <button className={styles.button}>
        <div className={styles.continue}>Continue</div>
      </button>
      <div className={styles.accountOptions}>
        <div className={styles.innerOptionsWrapper}>
          <div className={styles.innerOptions}>
            <div className={styles.accountQuestion}>
              <div className={styles.dontHaveAn}>Don't have an account? </div>
            </div>
            <div className={styles.link}>
              <a
                className={styles.createAccount}
                href="https://id.realestate.com.au/u/signup/identifier"
                target="_blank"
              >
                Create account
              </a>
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
};

export default FormBackground;
