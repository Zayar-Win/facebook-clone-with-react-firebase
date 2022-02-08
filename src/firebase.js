import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey:
    "AIzaSyB_uGpybRL0x8k4-D-bEeldJl2YyslTli0",
  authDomain:
    "facebook-clone-a8597.firebaseapp.com",
  projectId: "facebook-clone-a8597",
  storageBucket:
    "facebook-clone-a8597.appspot.com",
  messagingSenderId: "143544714764",
  appId:
    "1:143544714764:web:782a833fc1e9ac8b0d5029",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(app);
const auth = getAuth();
const Provider = new GoogleAuthProvider();

export { app, storage, auth, Provider };
export default db;
