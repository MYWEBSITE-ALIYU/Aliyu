import { auth, googleProvider } from "./firebase-config.js";

import { signInWithPopup } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

export async function googleLogin() {
const result = await signInWithPopup(auth, googleProvider);
return result.user;
}
