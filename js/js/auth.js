import { auth, db } from "./firebase-config.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import {
doc,
setDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";


// REGISTER
export async function registerUser(name, email, password) {

const userCredential =
await createUserWithEmailAndPassword(auth, email, password);

const user = userCredential.user;

await setDoc(doc(db, "users", user.uid), {
name,
email,
createdAt: new Date()
});

return user;
}


// LOGIN
export async function loginUser(email, password) {
return await signInWithEmailAndPassword(auth, email, password);
}


// LOGOUT
export function logoutUser() {
return signOut(auth);
}
