import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyBNVpzfwVsFR7qYEXq-KielQZoyg-u6B4o",
  authDomain: "disney-clone-project-f2fc3.firebaseapp.com",
  projectId: "disney-clone-project-f2fc3",
  storageBucket: "disney-clone-project-f2fc3.appspot.com",
  messagingSenderId: "81214334217",
  appId: "1:81214334217:web:a4888d8c209e352392dfd8",
  measurementId: "G-SB6MLGMNTP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};

export default db;



