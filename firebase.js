import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC896U-v1e0aV5RLR6XfXoe2hfA9ByzFkA",
  authDomain: "clone-ff3e0.firebaseapp.com",
  databaseURL: "https://clone-ff3e0.firebaseio.com",
  projectId: "clone-ff3e0",
  storageBucket: "clone-ff3e0.appspot.com",
  messagingSenderId: "878112607722",
  appId: "1:878112607722:web:cc423e75f5a8446e3d7693",
  measurementId: "G-NPN8DV7MCM",
      
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }; 