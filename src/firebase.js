import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA8qQrCOjyUP9iHz0h4xNL9SgwR1BwsFa0",
  authDomain: "slack-me-f26c4.firebaseapp.com",
  projectId: "slack-me-f26c4",
  storageBucket: "slack-me-f26c4.appspot.com",
  messagingSenderId: "868878104028",
  appId: "1:868878104028:web:c536f7e9549fef8df20b19",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
