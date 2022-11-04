import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDFcE8IYdr5rczq4aFVNwnBIGP-nDNAAgI",
  authDomain: "url-shortener-738ea.firebaseapp.com",
  projectId: "url-shortener-738ea",
  storageBucket: "url-shortener-738ea.appspot.com",
  messagingSenderId: "76930848656",
  appId: "1:76930848656:web:27adb0e4a70dc16c074515"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
