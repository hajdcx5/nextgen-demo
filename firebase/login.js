import { checkloginstatus } from "./checkloginStt.js";
import { auth } from "./config.js";
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'
const email = document.getElementById("email")
const password = document.getElementById("password")
const login = document.getElementById("login-btn")
const  handlelogin = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Login successfully")
        window.location.replace("./index.html")
      })
      .catch((error) => {
        alert(error.code)
      });
}

login.addEventListener("click",handlelogin);

checkloginstatus();