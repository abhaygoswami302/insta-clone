import { initializeApp } from "firebase/app";
import { getAuth, setPersistence,ReactNativeAsyncStorage } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  // ... your Firebase configuration
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