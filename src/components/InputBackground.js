import PropTypes from "prop-types";
import styles from "./InputBackground.module.css";

const InputBackground = ({ className = "" }) => {
  return (
    <form className={[styles.inputBackground, className].join(" ")}>
      <div className={styles.background}>
        <div className={styles.inputParent}>
          <img
            className={styles.inputIcon}
            type="text"
            alt=""
            src="/input@2x.png"
          />
          <div className={styles.label} />
          <div className={styles.background1}>
            <div className={styles.firstName}>First Name</div>
          </div>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image.svg"
          />
        </div>
      </div>
      <div className={styles.background}>
        <div className={styles.inputParent}>
          <img
            className={styles.inputIcon}
            type="text"
            alt=""
            src="/input@2x.png"
          />
          <div className={styles.label} />
          <div className={styles.background1}>
            <div className={styles.firstName}>Last Name</div>
          </div>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image.svg"
          />
        </div>
      </div>
      <div className={styles.background}>
        <div className={styles.inputParent}>
          <img
            className={styles.inputIcon}
            type="text"
            alt=""
            src="/input@2x.png"
          />
          <div className={styles.label} />
          <div className={styles.background1}>
            <div className={styles.firstName}>Email address</div>
          </div>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image.svg"
          />
        </div>
      </div>
      <div className={styles.background}>
        <div className={styles.inputParent}>
          <img
            className={styles.inputIcon}
            type="text"
            alt=""
            src="/input@2x.png"
          />
          <div className={styles.label} />
          <div className={styles.background7}>
            <div className={styles.firstName}>Password</div>
          </div>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image.svg"
          />
        </div>
      </div>
      <button className={styles.button}>
        <div className={styles.continue}>Continue</div>
      </button>
      <div className={styles.signInLink}>
        <div className={styles.signInContainer}>
          <div className={styles.alreadyHaveAnAccountWrapper}>
            <div className={styles.alreadyHaveAn}>
              Already have an account? 
            </div>
          </div>
          <div className={styles.link}>
            <a className={styles.signIn}>Sign in</a>
          </div>
        </div>
      </div>
      <div className={styles.horizontalDivider}>
        <div className={styles.horizontalborder} />
        <div className={styles.or}>Or</div>
        <div className={styles.horizontalborder} />
      </div>
      <div className={styles.container}>
        <div className={styles.formmargin}>
          <button className={styles.formButton}>
            <div className={styles.container1}>
              <div className={styles.continueWithGoogle}>
                Continue with Google
              </div>
            </div>
            <img className={styles.imageIcon4} alt="" src="/image-4@2x.png" />
          </button>
        </div>
        <div className={styles.formmargin1} />
      </div>
    </form>
  );
};

InputBackground.propTypes = {
  className: PropTypes.string,
};

export default InputBackground;
