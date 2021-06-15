import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA3cM3e9oSw1sjLiqnYIX7PjeFb3BFavNo",
  authDomain: "slack-clone-f2db2.firebaseapp.com",
  projectId: "slack-clone-f2db2",
  storageBucket: "slack-clone-f2db2.appspot.com",
  messagingSenderId: "206003560845",
  appId: "1:206003560845:web:a53dae8fc651ba8ab61dc4",
  measurementId: "G-ELYQH0LKEX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// For login page
const auth = firebase.auth();
// TO get Google Services
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
