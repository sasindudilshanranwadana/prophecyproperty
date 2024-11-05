import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { auth, db } from "../firebaseConfig"; // Ensure Firebase is configured
import { updatePassword, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore"; // Import necessary Firestore methods
import styles from "./ProfileDashboard.module.css";

const ProfileDashboard = () => {
    const [user, setUser] = useState(null);
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
            setClickedProperties(data.clickedProperties || []); // Load clicked properties from Firestore
        } else {
            console.error("No document found for user:", userId);
        }
    };

    const handlePropertyClick = async (propertyAddress) => {
        try {
            const response = await fetch("/properties.json");
            const properties = await response.json();

            const propertyData = properties.find(
                (property) => property.Address === propertyAddress
            );

            if (propertyData) {
                // Record clicked property in Firestore
                await recordClickedProperty(user.uid, propertyAddress);
                navigate("/search-reasult-buy", { state: { property: propertyData } });
            } else {
                console.error("Property not found in JSON file:", propertyAddress);
                alert("Property not found in listings.");
            }
        } catch (error) {
            console.error("Error loading properties from JSON:", error);
            alert("Failed to load property data.");
        }
    };

    const recordClickedProperty = async (userId, propertyAddress) => {
        const userRef = doc(db, 'users', userId);
        await updateDoc(userRef, {
            clickedProperties: arrayUnion(propertyAddress) // Record the property address
        });
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
                    <h3>Clicked Properties</h3>
                    {clickedProperties.length > 0 ? (
                        <ul>
                            {clickedProperties.map((property, index) => (
                                <li 
                                    key={index} 
                                    onClick={() => handlePropertyClick(property)} // Click to view property
                                    className={styles.clickableProperty}
                                >
                                    {property} {/* Render property address */}
                                </li>
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
