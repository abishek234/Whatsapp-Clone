import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuCKUSjhb9XugQjiKACccklRt1XjJsueM",
  authDomain: "chat-24b75.firebaseapp.com",
  projectId: "chat-24b75",
  storageBucket: "chat-24b75.appspot.com",
  messagingSenderId: "983539236641",
  appId: "1:983539236641:web:48aeb91c3d4edb3e5d0860",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider, storage };
export default db;
