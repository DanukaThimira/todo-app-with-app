import firebase from "../node_modules/firebase/compat";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBO3X7pxCpFKVR7klt8T2P3foKBBmB5TIA",
  authDomain: "todo-app-with-firebase-ef939.firebaseapp.com",
  projectId: "todo-app-with-firebase-ef939",
  storageBucket: "todo-app-with-firebase-ef939.appspot.com",
  messagingSenderId: "858463248115",
  appId: "1:858463248115:web:f80f95c3d18d5f235fa186",
  measurementId: "G-PSZB7R4KE8",
});

const db = firebaseApp.firestore();

export default db;
