import { auth } from "./config.js";
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'
const email = document.getElementById("email")
const password = document.getElementById("password")
const registerBtn = document.getElementById("register-btn")
const errormsg = document.getElementById("error-msg")
const  handleRegister = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.location.replace("./login.html")
      })
      .catch((error) => {
        alert(error.code)
        if(error.code == 'auth/invalid-email'){errormsg.textContent = "Email không hợp lệ"}
        else if (error.code == "auth/missing-password"){errormsg.textContent = "Chưa nhập mật khẩu"}
      });
}

registerBtn.addEventListener("click",handleRegister)