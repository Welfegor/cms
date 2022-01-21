import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDn8dqnKxi-_DpOvRXCqAquBV86phEOwcM",
  authDomain: "instagram-clone-95199.firebaseapp.com",
  projectId: "instagram-clone-95199",
  storageBucket: "instagram-clone-95199.appspot.com",
  messagingSenderId: "434311654834",
  appId: "1:434311654834:web:f543b54bf314fbccf288ab",
  measurementId: "G-1K595TC5XD"
});

const db = firebase.firestore()
const auth = firebase.auth();
const storage = firebase.storage()

export { db, auth, storage };
