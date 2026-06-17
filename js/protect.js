import { auth } from "./firebase-config.js";

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

export function protectPage() {
onAuthStateChanged(auth, (user) => {
if (!user) {
window.location.href = "login.html";
}
});
}
