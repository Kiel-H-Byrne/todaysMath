import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/auth/dist/index.cjs";
import "firebase/database/dist/index.cjs";

const firebaseConfig = {
  apiKey: "AIzaSyBTUtMRd68roYbhf1yYIZLSpwCD8NWpnrE",
  authDomain: "todaysmath-5d0e8.firebaseapp.com",
  databaseURL: "https://todaysmath-5d0e8.firebaseio.com",
  projectId: "todaysmath-5d0e8",
  storageBucket: "todaysmath-5d0e8.appspot.com",
  messagingSenderId: "1015189715065",
  appId: "1:1015189715065:web:bae89322e120772910bca8",
  measurementId: "G-SQY8ZPMQV7"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics()
}

const auth = firebase.auth();
auth.useDeviceLanguage;
const fsdb = firebase.firestore();

export { auth, fsdb };
