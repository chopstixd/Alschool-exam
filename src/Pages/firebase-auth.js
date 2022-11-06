import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANfoLDGZsVAl8NwHJUlgLrUynJJMaSsg0",
  authDomain: "auth-8b1ef.firebaseapp.com",
  projectId: "auth-8b1ef",
  storageBucket: "auth-8b1ef.appspot.com",
  messagingSenderId: "445273762769",
  appId: "1:445273762769:web:81f403cae7cb5fe3760ef0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      
    })
    .catch((error) => {
      console.log(error);
    });
};
   