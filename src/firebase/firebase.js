// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";


const firebaseApi =  process.env.REACT_APP_HOT_APR_KEY
const firebaseConfig = {
  apiKey: firebaseApi,
  authDomain: "my-store-fd987.firebaseapp.com",
  projectId: "my-store-fd987",
  storageBucket: "my-store-fd987.appspot.com",
  messagingSenderId: "1083504488537",
  appId: "1:1083504488537:web:8044ebde8fb5713cb74148",
  measurementId: "G-R3J93HWPMQ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
