// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI0Xba1_4svoRyKxbVM_VykEsvZ9EywEM",
  authDomain: "my-ecommerce-2da4c.firebaseapp.com",
  databaseURL: "https://my-ecommerce-2da4c-default-rtdb.firebaseio.com",
  projectId: "my-ecommerce-2da4c",
  storageBucket: "my-ecommerce-2da4c.appspot.com",
  messagingSenderId: "929489346050",
  appId: "1:929489346050:web:f56217d653721ce581111b",
  measurementId: "G-4FJ0MZFVYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Hidden website login
async function signInWebUser() {
  try {
    await signInWithEmailAndPassword(auth, "neo@gmail.com", "123456");
    console.log("✅ Web user signed in successfully.");
  } catch (error) {
    console.error("❌ Error signing in web user:", error.message);
  }
}

// Run the hidden login when the page loads
signInWebUser();

// Export for other files
export { db, auth };


