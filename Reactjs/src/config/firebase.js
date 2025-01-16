import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCC3fbLqKDDBoKTb4RUV1rYhyVhXNuRKUw",
  authDomain: "socialmedia-be5e6.firebaseapp.com",
  projectId: "socialmedia-be5e6",
  storageBucket: "socialmedia-be5e6.firebasestorage.app",
  messagingSenderId: "220317826291",
  appId: "1:220317826291:web:a4367c29e041ed024d4b86",
  measurementId: "G-KJ9B89DCYX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(auth)
