const firebaseConfig = {
    apiKey: "AIzaSyDqMInTE0MudKfObCNIoBHK6rhxGXRJ89U",
    authDomain: "login-page-app-e5994.firebaseapp.com",
    projectId: "login-page-app-e5994",
    storageBucket: "login-page-app-e5994.appspot.com",
    messagingSenderId: "1009872547170",
    appId: "1:1009872547170:web:44e9e0ec200d74ac03103b"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login successful");
    })
    .catch(error => alert(error.message));
}