import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcyKKrQQIxxBRScNDlxVKvtvFL-DHlDuw",
    authDomain: "nwhacks2024-c3c3d.firebaseapp.com",
    projectId: "nwhacks2024-c3c3d",
    storageBucket: "nwhacks2024-c3c3d.appspot.com",
    messagingSenderId: "371073057181",
    appId: "1:371073057181:web:45e882537caff341696f74",
    measurementId: "G-E9E8YKRK31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);