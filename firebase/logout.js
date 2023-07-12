import { auth } from "./config.js";
import { signOut  } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'
const logout = document.getElementById("logout-btn")
const  handlelogout = () => {
    signOut (auth)
    .then(() => {
        // Signed in 
        alert("Logout successfully")
        window.location.replace("./login.html")
      })
      .catch((error) => {
        alert(error.code)
      });
}

logout.addEventListener("click",handlelogout);