// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfmEyfy4nJxU8w1mEe61zeRY7LWH4cS9I",
  authDomain: "netflixclone-d0e62.firebaseapp.com",
  projectId: "netflixclone-d0e62",
  storageBucket: "netflixclone-d0e62.appspot.com",
  messagingSenderId: "372926717589",
  appId: "1:372926717589:web:c9fca9ee2ec2675593c59c",
  measurementId: "G-DV5CNP57JF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
