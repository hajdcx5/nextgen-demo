import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBvuS3JcKURgSEqgLw8wwHECRZ118dSGzY",
    authDomain: "nextgen-demo-9b6cc.firebaseapp.com",
    projectId: "nextgen-demo-9b6cc",
    storageBucket: "nextgen-demo-9b6cc.appspot.com",
    messagingSenderId: "768930236211",
    appId: "1:768930236211:web:1f1403aa8966878fe12046",
    measurementId: "G-WNH4PLYHB2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
