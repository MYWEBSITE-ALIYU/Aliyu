import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";

import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-storage.js";

const firebaseConfig = {
apiKey: "AIzaSyCdesdKrBIAPzKsssaMCYlI50n-BwuesXI",
authDomain: "campuconnect-9bb6d.firebaseapp.com",
projectId: "campuconnect-9bb6d",
storageBucket: "campuconnect-9bb6d.firebasestorage.app",
messagingSenderId: "1038348640526",
appId: "1:1038348640526:web:0d3683a3f7da078255375f",
measurementId: "G-XNWYVF4HDE"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider();
