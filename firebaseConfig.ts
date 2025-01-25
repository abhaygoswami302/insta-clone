import { initializeApp } from "firebase/app";
import { getAuth, setPersistence,ReactNativeAsyncStorage } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPr-mFenCuO1bcj5YAGjKWP2AHicZcyv4",
  authDomain: "app-dev-2319a.firebaseapp.com",
  projectId: "app-dev-2319a",
  storageBucket: "app-dev-2319a.firebasestorage.app",
  messagingSenderId: "904809183680",
  appId: "1:904809183680:web:7b393ab4e111f291f87025",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Use AsyncStorage for local persistence
setPersistence(auth, { 
  type:ReactNativeAsyncStorage, 

  storage: AsyncStorage 
}); 

const db = getFirestore(app);
const userRef = collection(db, "user");
const roomRef = collection(db, "room");

export { auth, db, userRef, roomRef };