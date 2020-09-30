import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD7pCCxvByyoyXKgEzN4ineBmsOVHVvIp0",
    authDomain: "clone-23aac.firebaseapp.com",
    databaseURL: "https://clone-23aac.firebaseio.com",
    projectId: "clone-23aac",
    storageBucket: "clone-23aac.appspot.com",
    messagingSenderId: "355486973544",
    appId: "1:355486973544:web:d8407618d9ed954ff145dd"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
  
export { db, auth };