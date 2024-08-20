// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: "YOUR_API_KEY",
    // authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    // projectId: "YOUR_PROJECT_ID",
    // storageBucket: "YOUR_PROJECT_ID.appspot.com",
    // messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    // appId: "YOUR_APP_ID"

    apiKey: "AIzaSyDzben_OrgjlTqtMPWX1zrBzfbxbUK8yUE",
    authDomain: "project2-pantry.firebaseapp.com",
    projectId: "project2-pantry",
    storageBucket: "project2-pantry.appspot.com",
    messagingSenderId: "405044934240",
    appId: "1:405044934240:web:ad3bde69ba2c2f8636b505",
    measurementId: "G-5RN5YMN5H6"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const firestore = getFirestore(app);
// export { firestore };