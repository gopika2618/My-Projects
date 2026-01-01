// Firebase configuration (FROM FIREBASE CONSOLE)
const firebaseConfig = {
    apiKey: "AIzaSyDqMInTE0MudKfObCNIoBHK6rhxGXRJ89U",
    authDomain: "login-page-app-e5994.firebaseapp.com",
    projectId: "login-page-app-e5994",
    storageBucket: "login-page-app-e5994.appspot.com",
    messagingSenderId: "1009872547170",
    appId: "1:1009872547170:web:44e9e0ec200d74ac03103b"
};

// Initialize Firebase (COMPAT)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// SIGN UP
function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
    alert("Please enter email and password");
    return;
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
        window.location.href = "dashboard.html";
    })
    .catch(error => alert(error.message));
}

// LOGIN
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
        window.location.href = "dashboard.html";
    })
    .catch(error => alert(error.message));
}

// GOOGLE LOGIN
function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
    .then(() => {
        window.location.href = "dashboard.html";
    })
    .catch(error => alert(error.message));
}

// FORGOT PASSWORD
function forgotPassword() {
    const email = document.getElementById("email").value;

    if (!email) {
    alert("Enter email first");
    return;
    }

    auth.sendPasswordResetEmail(email)
    .then(() => alert("Reset email sent"))
    .catch(error => alert(error.message));
}