import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  ReactNativeAsyncStorage,
} from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Use AsyncStorage for local persistence
setPersistence(auth, {
  type: ReactNativeAsyncStorage,

  storage: AsyncStorage,
});

const db = getFirestore(app);
const userRef = collection(db, "user");
const roomRef = collection(db, "room");

export { auth, db, userRef, roomRef };
