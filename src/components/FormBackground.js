// FormBackground.js
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import styles from "./FormBackground.module.css";

// Mapping Firebase error codes to user-friendly messages
const errorMessages = {
  "auth/email-already-in-use": "This email is already in use. Please try another email.",
  "auth/invalid-email": "The email address is not valid. Please enter a valid email.",
  "auth/operation-not-allowed": "Sign-in method is not enabled. Please contact support.",
  "auth/weak-password": "The password is too weak. Please use a stronger password.",
  "auth/user-disabled": "This account has been disabled. Please contact support.",
  "auth/user-not-found": "No user found with this email. Please check or create an account.",
  "auth/wrong-password": "The password is incorrect. Please try again.",
  "auth/popup-closed-by-user": "The sign-in process was canceled. Please try again.",
  "default": "An unexpected error occurred. Please try again later."
};

const FormBackground = ({ className = "", isSignUp = false }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setMessage("");

    try {
      if (isSignUp) {
        // Create the user and save their data
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save additional user data in Firestore
        await setDoc(doc(db, "users", user.uid), {
          firstName: firstName,
          lastName: lastName,
          email: email,
        });

        // Send verification email
        await sendEmailVerification(user);
        setMessage("A verification email has been sent. Please check your inbox.");

        // Redirect to the root page after a short delay
        setTimeout(() => {
          navigate("/"); // Redirect to the root page
        }, 3000); // Adjust the delay as needed
      } else {
        // Sign-in logic
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Signed in successfully");
        navigate("/"); // Redirect immediately after sign-in
      }
    } catch (error) {
      const errorMessage = errorMessages[error.code] || errorMessages["default"];
      setError(errorMessage);
      console.error("Authentication error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("Google sign-in successful");
      navigate("/"); // Redirect immediately after Google sign-in
    } catch (error) {
      const errorMessage = errorMessages[error.code] || errorMessages["default"];
      setError(errorMessage);
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <form onSubmit={handleAuth} className={[styles.formBackground, className].join(" ")}>
      {isSignUp && (
        <>
          <div className={styles.background}>
            <div className={styles.input} />
            <img className={styles.imageIcon} alt="" src="/image.svg" />
            <div className={styles.emailField}>
              <input
                className={styles.background1}
                placeholder="First Name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={styles.background}>
            <div className={styles.input} />
            <img className={styles.imageIcon} alt="" src="/image.svg" />
            <div className={styles.emailField}>
              <input
                className={styles.background1}
                placeholder="Last Name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
        </>
      )}

      <div className={styles.background}>
        <div className={styles.input} />
        <img className={styles.imageIcon} alt="" src="/image.svg" />
        <div className={styles.emailField}>
          <input
            className={styles.background1}
            placeholder="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {error && <p className={styles.error}>{error}</p>}
      {message && <p className={styles.success}>{message}</p>}

      <button type="submit" className={styles.button} disabled={loading}>
        <div className={styles.continue}>
          {loading ? "Processing..." : isSignUp ? "Create Account" : "Continue"}
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
              <Link
                to={isSignUp ? "/signin" : "/signup"}
                className={styles.createAccount}
              >
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
          <button
            type="button"
            className={styles.formButton}
            onClick={handleGoogleSignIn}
          >
            <div className={styles.container1}>
              <div className={styles.continueWithGoogle}>Continue with Google</div>
            </div>
            <img className={styles.imageIcon2} alt="" src="/image-2@2x.png" />
          </button>
        </div>
      </div>
    </form>
  );
};

FormBackground.propTypes = {
  className: PropTypes.string,
  isSignUp: PropTypes.bool,
};

export default FormBackground;
