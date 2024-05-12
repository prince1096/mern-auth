// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyCflaE8ug-q5xm50sFSy3sXqc2XLmATPFI",
  authDomain: "mernauth-36dc1.firebaseapp.com",
  projectId: "mernauth-36dc1",
  storageBucket: "mernauth-36dc1.appspot.com",
  messagingSenderId: "591608214393",
  appId: "1:591608214393:web:816e7ae77ccf8c8d94f5a8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
