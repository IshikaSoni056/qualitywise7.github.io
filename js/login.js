const urlParams = new URLSearchParams(window.location.search);
const redirect_url = urlParams.get('redirect_url');

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzoJJ_325VL_axuuAFzDf3Bwt_ENzu2rM",
  authDomain: "jobsdoor360-39b87.firebaseapp.com",
  databaseURL: "https://jobsdoor360-39b87-default-rtdb.firebaseio.com",
  projectId: "jobsdoor360-39b87",
  storageBucket: "jobsdoor360-39b87.appspot.com",
  messagingSenderId: "326416618185",
  appId: "1:326416618185:web:de19e90fe4f06006ef3318",
  measurementId: "G-60RHEMJNM6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await loginUser(email, password);
    localStorage.setItem("email", email);
    Toastify({
      text: "Logged in Successfully..",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", 
      position: "right", 
      stopOnFocus: true, 
      style: {
        background: "linear-gradient(to right, #0d6efd, #586ba6)",
        borderRadius: "10px"
      }
    }).showToast();
    setTimeout(() => {
      if(redirect_url){
        window.location.href = "../myaccount"+redirect_url;
      }else{
        window.location.href = "../myaccount";
      }
     
    }, 1000);
      } catch (error) {
        Toastify({
          text: "Error Please try after some time.",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top", 
          position: "right", 
          stopOnFocus: true, 
          style: {
            background: "linear-gradient(to right, #0d6efd, #586ba6)",
            borderRadius: "10px"
          }
        }).showToast();
  }
});


async function loginUser(email, password) {
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password);
}
