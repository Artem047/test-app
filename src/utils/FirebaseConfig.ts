import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBduXGAcON9IJ9Asv8N6WyV2Zztts4IY3E",
  authDomain: "test-app-b2741.firebaseapp.com",
  projectId: "test-app-b2741",
  storageBucket: "test-app-b2741.appspot.com",
  messagingSenderId: "619770719325",
  appId: "1:619770719325:web:200d3ecdfb89fbc04431b4",
  measurementId: "G-VMBN6Z5408"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
export const provider = new GoogleAuthProvider();