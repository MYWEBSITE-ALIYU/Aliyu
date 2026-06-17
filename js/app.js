import { protectPage } from "./protect.js";
import { logoutUser } from "./auth.js";
import { auth } from "./firebase-config.js";

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

// protect pages
protectPage();

// show user email
onAuthStateChanged(auth, (user) => {
if (user) {
const el = document.getElementById("userEmail");
if (el) el.innerText = user.email;
}
});

// logout
window.logout = async () => {
await logoutUser();
window.location.href = "login.html";
};
