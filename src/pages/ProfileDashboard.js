// ProfileDashboard.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { auth, db } from "../firebaseConfig";
import { updatePassword, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import styles from "./ProfileDashboard.module.css";

const ProfileDashboard = () => {
  const [user, setUser] = useState(null);
  const [searchTerms, setSearchTerms] = useState([]);
  const [clickedProperties, setClickedProperties] = useState([]);
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        await loadUserActivity(currentUser.uid);
      } else {
        navigate("/signin");
      }
    });

    return unsubscribe;
  }, [navigate]);

  const loadUserActivity = async (userId) => {
    const userRef = doc(db, 'users', userId);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      setSearchTerms(data.searchTerms || []);
      setClickedProperties(data.clickedProperties || []);
    }
  };

  const handleChangePassword = async () => {
    if (newPassword.length < 6) {
      setPasswordError("Password should be at least 6 characters long.");
      return;
    }
    try {
      await updatePassword(auth.currentUser, newPassword);
      alert("Password updated successfully!");
      setNewPassword("");
    } catch (error) {
      setPasswordError("Failed to update password. Please try again.");
      console.error("Password update error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/signin");
    } catch (error) {
      console.error("Sign out failed", error);
    }
  };

  return (
    <div>
      <Header />

      <div className={styles.dashboard}>
        <h2>Welcome, {user ? user.email : "User"}</h2>

        <div className={styles.section}>
          <h3>Profile Information</h3>
          <p><strong>Email:</strong> {user && user.email}</p>
        </div>

        <div className={styles.section}>
          <h3>Previous Searches</h3>
          {searchTerms.length > 0 ? (
            <ul>
              {searchTerms.map((term, index) => (
                <li key={index}>{term}</li>
              ))}
            </ul>
          ) : (
            <p>No searches found</p>
          )}
        </div>

        <div className={styles.section}>
          <h3>Clicked Properties</h3>
          {clickedProperties.length > 0 ? (
            <ul>
              {clickedProperties.map((property, index) => (
                <li key={index}>{property}</li>
              ))}
            </ul>
          ) : (
            <p>No properties clicked</p>
          )}
        </div>

        <div className={styles.section}>
          <h3>Change Password</h3>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
              setPasswordError("");
            }}
            className={styles.input}
          />
          <button onClick={handleChangePassword} className={styles.button}>
            Update Password
          </button>
          {passwordError && <p className={styles.error}>{passwordError}</p>}
        </div>

        <button onClick={handleSignOut} className={styles.signOutButton}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfileDashboard;
